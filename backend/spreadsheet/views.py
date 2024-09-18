from rest_framework import viewsets, status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from .models import Well
from .serializers import WellSerializer, FileUploadSerializer
import modin.pandas as mpd


ALLOWED_TYPES = [
    'text/csv',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
]


def validate_input_type(mime_file):
    if mime_file not in ALLOWED_TYPES:
        return False
    
    return True

    
def return_dataframe(file):
    if file.content_type == ALLOWED_TYPES[0]:
        return mpd.read_csv(file)
    
    return mpd.read_excel(file)


class WellViewSets(viewsets.ModelViewSet):
    queryset = Well.objects.all()
    serializer_class = WellSerializer


class SpreadsheetWellViewSets(viewsets.ViewSet):
    serializer_class = FileUploadSerializer
    parser_classes = (MultiPartParser, FormParser)

    def create(self, request):
        try:
            if not request.data.get('file'):
                return Response({"message" : "No spreadsheet uploaded!"}, status=status.HTTP_400_BAD_REQUEST)

            validate = validate_input_type(request.data.get('file').content_type)
            if not validate:
                return Response({"message" : "Invalid file format!"}, status=status.HTTP_400_BAD_REQUEST)

            dataframe = return_dataframe(request.data.get('file'))

            for index, row in dataframe.iterrows():
                dataframe_datas = {
                    "name": row['POCO'],
                    "reclassification": row['RECLASSIFICACAO'],
                    "situation": row['SITUACAO'],
                    "operator": row['OPERADOR'],
                    "localization": {
                        "state": row['ESTADO'],
                        "basin": row['BACIA'],
                        "block": row['BLOCO'],
                        "countryside": row['CAMPO']
                    },
                    "type_of_well": {
                        "category": row['CATEGORIA'],
                        "land_sea": row['TERRA_MAR']
                    },
                    "map_datas": {
                        "latitude_base_4C": row['LATITUDE_BASE_4C'],
                        "longitude_base_4C": row['LONGITUDE_BASE_4C'],
                        "latitude_base_DD": row['LATITUDE_BASE_DD'],
                        "longitude_base_DD": row['LONGITUDE_BASE_DD']
                    },
                    "dates": {
                        "start": str(row['INICIO']),
                        "finish": str(row['TERMINO']),
                        "conclusion": str(row['CONCLUSAO'])
                    }
                }

            serializer = WellSerializer(data=dataframe_datas)

            if serializer.is_valid():
                serializer.save()
            else:
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
                # return Response({"message" : "Invalid datas!"}, status=status.HTTP_400_BAD_REQUEST)
        
        except Exception as e:
            print(f'Error: {e}')
            return Response({"message" : "Internal server error!"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        return Response({"message" : "Spreadsheet uploaded with success!"}, status=status.HTTP_201_CREATED)


"""    
A fazer:
  - Se uma das linhas estiver incorreta, não salvar a planilha;
  - Verificar se o poço já está cadastrado;
  - Verificar o porque está salvando apenas a última linha.
"""
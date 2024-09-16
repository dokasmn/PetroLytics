from rest_framework import viewsets, status
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from .models import Well
from .serializers import WellSerializer


class WellViewSets(viewsets.ModelViewSet):
    queryset = Well.objects.all()
    serializer_class = WellSerializer



class SpreadsheetWellViewSets(viewsets.ViewSet):
    parser_classes = [FileUploadParser]

    def create(self, request):
        try:
            print(request.data.get('file'))
        except Exception as e:
            print(e)
        return Response({"message" : "Spreadsheet uploaded with success!"}, status=status.HTTP_201_CREATED)
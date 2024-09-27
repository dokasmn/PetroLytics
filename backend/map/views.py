from .serializers import LocalizationSerializer
from spreadsheet.models import Well
from rest_framework import viewsets


class LocalizationViewSets(viewsets.ModelViewSet):
    queryset = Well.objects.all()
    serializer_class = LocalizationSerializer
    http_method_names = ['get']
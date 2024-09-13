from rest_framework import viewsets
from .models import Well
from .serializers import WellSerializer


class WellViewSets(viewsets.ModelViewSet):
    queryset = Well.objects.all()
    serializer_class = WellSerializer
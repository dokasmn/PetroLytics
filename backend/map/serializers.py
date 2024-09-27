from rest_framework import serializers
from spreadsheet.models import Well


class LocalizationSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Well
        fields = [
            'name',
            'map_datas'
        ]
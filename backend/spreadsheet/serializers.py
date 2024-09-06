from rest_framework import serializers
from .models import Well


class LocalizationSerializer(serializers.Serializer):
    state = serializers.CharField(max_length=2)
    basin = serializers.CharField(max_length=60)
    block = serializers.CharField(max_length=60)
    countryside = serializers.CharField(max_length=60)


class TypeOfWellSerializer(serializers.Serializer):
    OPTIONS = [
        ('land', 'Land'),
        ('sea', 'Sea')
    ]

    category = serializers.CharField(max_length=60)
    land_sea = serializers.CharField(
        choices=OPTIONS
    )


class MapSerializer(serializers.Serializer):
    latitude_base_4C = serializers.CharField(max_length=60)
    longitude_base_4C = serializers.CharField(max_length=60)
    latitude_base_DD = serializers.CharField(max_length=60)
    longitude_base_DD = serializers.CharField(max_length=60)


class DatesSerializer(serializers.Serializer):
    start = serializers.DateField(max_length=11)
    finish = serializers.DateField(max_length=11)
    conclusion = serializers.DateField(max_length=11)


class WellSerializer(serializers.ModelSerializer):
    localization = LocalizationSerializer()
    type_of_well = TypeOfWellSerializer()
    map_datas_serializer = MapSerializer()
    dates = DatesSerializer()

    class Meta:
        model = Well
        fields = [
            'name', 
            'reclassification',
            'situation',
            'operator'

        ]

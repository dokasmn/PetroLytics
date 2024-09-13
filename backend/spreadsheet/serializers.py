from rest_framework import serializers
from .models import Well


class LocalizationSerializer(serializers.Serializer):
    state = serializers.CharField(max_length=2)
    basin = serializers.CharField(max_length=60)
    block = serializers.CharField(max_length=60)
    countryside = serializers.CharField(max_length=60)


class TypeOfWellSerializer(serializers.Serializer):
    category = serializers.CharField(max_length=60)
    land_sea = serializers.CharField(max_length=1)


class MapSerializer(serializers.Serializer):
    latitude_base_4C = serializers.CharField(max_length=60)
    longitude_base_4C = serializers.CharField(max_length=60)
    latitude_base_DD = serializers.CharField(max_length=60)
    longitude_base_DD = serializers.CharField(max_length=60)


class DatesSerializer(serializers.Serializer):
    start = serializers.DateField(format="%d/%m/%Y")
    finish = serializers.DateField(format="%d/%m/%Y")
    conclusion = serializers.DateField(format="%d/%m/%Y")


class WellSerializer(serializers.ModelSerializer):
    localization = LocalizationSerializer()
    type_of_well = TypeOfWellSerializer()
    map_datas = MapSerializer()
    dates = DatesSerializer()

    class Meta:
        model = Well
        fields = [
            'name', 
            'reclassification',
            'situation',
            'operator',
            'localization',
            'type_of_well',
            'map_datas',
            'dates'
        ]

    def create(self, valited_data):
        localization_data = valited_data.pop('localization')
        type_of_well_data = valited_data.pop('type_of_well')
        map_datas_data = valited_data.pop('map_datas')
        dates_data = valited_data.pop('dates')

        Well.objects.create(
            **valited_data, 
            localization=localization_data, 
            type_of_well=type_of_well_data,
            map_datas=map_datas_data,
            dates=dates_data 
            )
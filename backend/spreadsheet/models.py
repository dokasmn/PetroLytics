from django.db import models


class Localization(models.Model):
    state = models.CharField()
    basin = models.CharField()
    block = models.CharField()
    countryside = models.CharField()

    class Meta:
        abstract = True


class TypeOfWell(models.Model):
    OPTIONS = [
        ('land', 'Land'),
        ('sea', 'Sea')
    ]

    category = models.CharField()
    land_sea = models.CharField(
        choices=OPTIONS
    )

    class Meta: 
        abstract = True


class Map(models.Model):
    latitude_base_4C = models.CharField()
    longitude_base_4C = models.CharField()
    latitude_base_DD = models.CharField()
    longitude_base_DD = models.CharField()

    class Meta:
        abstract = True


class Dates(models.Model):
    start = models.DateField()
    finish = models.DateField()
    conclusion = models.DateField()

    class Meta: 
        abstract = True


class Well(models.Model):
    name = models.CharField()
    reclassification = models.CharField()
    situation = models.CharField()
    operator = models.CharField()
    
    localization = models.JSONField()
    type_of_well = models.JSONField()
    map_datas = models.JSONField()
    dates = models.JSONField()

    class Meta:
        verbose_name = 'Well'
        verbose_name_plural = 'Wells '

    def __str__(self):
        return self.name
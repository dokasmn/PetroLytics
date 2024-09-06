from django.db import models


class Localization(models.Model):
    state = models.CharField(max_length=2)
    basin = models.CharField(max_length=60)
    block = models.CharField(max_length=60)
    countryside = models.CharField(max_length=60)

    class Meta:
        abstract = True


class TypeOfWell(models.Model):
    OPTIONS = [
        ('land', 'Land'),
        ('sea', 'Sea')
    ]

    category = models.CharField(max_length=60)
    land_sea = models.CharField(
        choices=OPTIONS
    )

    class Meta: 
        abstract = True


class Map(models.Model):
    latitude_base_4C = models.CharField(max_length=60)
    longitude_base_4C = models.CharField(max_length=60)
    latitude_base_DD = models.CharField(max_length=60)
    longitude_base_DD = models.CharField(max_length=60)

    class Meta:
        abstract = True


class Dates(models.Model):
    start = models.DateField(max_length=11)
    finish = models.DateField(max_length=11)
    conclusion = models.DateField(max_length=11)

    class Meta: 
        abstract = True
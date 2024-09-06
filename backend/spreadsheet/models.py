from django.db import models


class Well(models.Model):
    name = models.CharField(max_length=60)
    reclassification = models.CharField(max_length=100)
    situation = models.CharField(max_length=60)
    operator = models.CharField(max_length=20)
    
    localization = models.JSONField()
    type_of_well = models.JSONField()
    map_datas = models.JSONField()
    dates = models.JSONField()

    class Meta:
        verbose_name = 'Well'
        verbose_name_plural = 'Wells '

    def __str__(self):
        return self.name
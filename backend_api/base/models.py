from django.db import models
class BaseTest(models.Model):
    example_text = models.CharField(max_length=50)

    class Meta:
        managed = False
        db_table = 'base_test'

class DupaSqlite3(models.Model):
    index = models.IntegerField(blank=True, null=True)
    district_id = models.FloatField(blank=True, null=True)
    city_id = models.IntegerField(blank=True, null=True)
    region_id = models.IntegerField(blank=True, null=True)
    city_name = models.TextField(blank=True, null=True)
    lon_city = models.FloatField(blank=True, null=True)
    lat_city = models.FloatField(blank=True, null=True)
    district_name = models.TextField(blank=True, null=True)
    lon_district = models.FloatField(blank=True, null=True)
    lat_district = models.FloatField(blank=True, null=True)
    region_name = models.TextField(blank=True, null=True)
    lon_region = models.FloatField(blank=True, null=True)
    lat_region = models.FloatField(blank=True, null=True)
    id = models.IntegerField(primary_key = True, blank=False, null=False)

    class Meta:
        managed = False
        db_table = 'dupa.sqlite3'

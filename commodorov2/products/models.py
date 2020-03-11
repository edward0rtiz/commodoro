from django.db import models
from places.models import Farm


class Product(models.Model):
    farm = models.ForeignKey(Farm, on_delete=models.CASCADE, related_name='farm_product')
    coffeeName = models.CharField(max_length=50)
    description = models.TextField()
    price = models.FloatField()
    variety = models.CharField(max_length=50)
    processing = models.CharField(max_length=50)
    crop_year = models.IntegerField()
    # couping_score = models.IntegerField()


class Feature(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_feature')
    title = models.CharField(max_length=50)
    percentage = models.IntegerField()
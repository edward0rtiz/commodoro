from django.db import models
from places.models import Farm


class Product(models.Model):
    """Models for save the products

    Arguments:
        models {model} -- Built-in Django model
    """
    farm = models.ForeignKey(Farm, on_delete=models.CASCADE, related_name='farm_product')
    coffeeName = models.CharField(max_length=50)
    description = models.TextField()
    price = models.FloatField()
    variety = models.CharField(max_length=50)
    processing = models.CharField(max_length=50)
    crop_year = models.IntegerField()
    # couping_score = models.IntegerField()


class Feature(models.Model):
    """Models for creation of a feature to be nested to Farm

    Arguments:
        models {model} -- Built-in Django model
    """
    farm = models.ForeignKey(Farm, on_delete=models.CASCADE, related_name='farm_feature')
    title = models.CharField(max_length=50)
    percentage = models.IntegerField()
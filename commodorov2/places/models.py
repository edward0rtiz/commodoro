from django.db import models
from django.contrib.auth.models import User


class Farm(models.Model):
    """Models for creation of a farm in our app

    Arguments:
        models {model} -- Built-in Django model
    """
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    farmName = models.CharField(max_length=50)
    profilePic = models.CharField(max_length=200)
    bio = models.TextField()
    address = models.CharField(max_length=100)
    country = models.CharField(max_length=50)
    region = models.CharField(max_length=50)
    phone = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    facebook = models.CharField(max_length=50)
    twitter = models.CharField(max_length=50)
    linkedin = models.CharField(max_length=50)
    instagram = models.CharField(max_length=50)


class Certificate(models.Model):
    """Table where the certificates belonging to a farm are saved

    Arguments:
        models {model} -- Built-in Django model
    """
    farm = models.ForeignKey(Farm, on_delete=models.CASCADE, related_name='farm_certificate')
    designation = models.CharField(max_length=50)
    comment = models.TextField()


class History(models.Model):
    """Table where the history of the farm is compilated

    Arguments:
        models {model} -- Built-in Django model
    """
    farm = models.ForeignKey(Farm, on_delete=models.CASCADE, related_name='farm_history')
    location = models.CharField(max_length=100)
    milestone = models.CharField(max_length=100)
    duration = models.CharField(max_length=25)
    comment = models.TextField()


class Picture(models.Model):
    """Table where we locate the path to the pictures

    Arguments:
        models {model} -- Built-in Django model
    """
    # farm = models.ForeignKey(Farm, on_delete=models.CASCADE, related_name='farm_picture')
    image = models.ImageField(default='default.jpg', upload_to='farm_pics')

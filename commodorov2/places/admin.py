from django.contrib import admin
from .models import Farm, Certificate, History, Picture

# Register your models here.
admin.site.register(Farm)
admin.site.register(Certificate)
admin.site.register(History)
admin.site.register(Picture)
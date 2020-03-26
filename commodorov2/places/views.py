from django.shortcuts import render
from .models import Farm, Picture
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .serializers import *

class FarmsListView(generics.ListCreateAPIView):
    queryset = Farm.objects.all()
    serializer_class = FarmSerializer


class FarmsView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = FarmSerializer
    queryset = Farm.objects.all()


# class PicturesListView(generics.ListCreateAPIView):
#     parser_classes = (MultiPartParser, FormParser)
#     queryset = Picture.objects.all()
#     serializer_class = PictureSerializer

class PicturesListView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        pictures = Picture.objects.all()
        serializer = PictureSerializer(pictures, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        pictures_serializer = PictureSerializer(data=request.data)
        if pictures_serializer.is_valid():
            pictures_serializer.save()
            return Response(pictures_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', pictures_serializer.errors)
            return Response(pictures_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PicturesView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PictureSerializer
    queryset = Picture.objects.all()


class CertificatesListView(generics.ListCreateAPIView):
    queryset = Certificate.objects.all()
    serializer_class = CertificateSerializer


class CertificatesView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = CertificateSerializer
    queryset = Certificate.objects.all()
from django.shortcuts import render
from .models import Farm, Picture
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .serializers import *

class FarmsListView(generics.ListCreateAPIView):
    """View of Farms

    Arguments:
        generics {ListCreateAPIView} -- Built-in DRF view
    """
    queryset = Farm.objects.all()
    serializer_class = FarmSerializer


class FarmsView(generics.RetrieveUpdateDestroyAPIView):
    """View of a specific Farm

    Arguments:
        generics {ListCreateAPIView} -- Built-in DRF view
    """
    serializer_class = FarmSerializer
    queryset = Farm.objects.all()

class PicturesListView(APIView):
    """List of Pictures view

    Arguments:
        APIView -- Built-in DRF view

    Returns:
        Response -- Data or signal
    """
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
    """View of a specific Picture

    Arguments:
        generics {RetrieveUpdateDestroyAPIView} -- Built-in DRF view
    """
    serializer_class = PictureSerializer
    queryset = Picture.objects.all()


class CertificatesListView(generics.ListCreateAPIView):
    """View of Certificates

    Arguments:
        generics {ListCreateAPIView} -- Built-in DRF view
    """
    queryset = Certificate.objects.all()
    serializer_class = CertificateSerializer


class CertificatesView(generics.RetrieveUpdateDestroyAPIView):
    """View of a specific Certificate

    Arguments:
        generics {RetrieveUpdateDestroyAPIView} -- Built-in DRF view
    """
    serializer_class = CertificateSerializer
    queryset = Certificate.objects.all()
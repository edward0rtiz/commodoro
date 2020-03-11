from django.contrib.auth.models import User
from products.models import Product, Feature
from .models import Farm, Certificate, History, Picture
# from users.models import Profile
from rest_framework import serializers, fields, status, viewsets
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend


class UserSerializer(serializers.ModelSerializer):
    """ Serialization of the User, calling just
    some fields, and nesting the Profile serialization """
    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'first_name',
            'last_name',
            'email',
        )
# --------- Serialize all about Products --------------------


class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = (
            'id',
            'product',
            'title',
            'percentage',
            )
        # read_only_fields = ('product',)


class ProductSerializer(serializers.ModelSerializer):
    product_feature = FeatureSerializer(many=True)
    class Meta:
        model = Product
        fields = (
            'id',
            'farm',
            'coffeeName',
            'description',
            'price',
            'variety',
            'processing',
            'crop_year',
            'product_feature',
        )
        # read_only_fields = ('farm', )


"""    def create(self, validated_data):
        features_data = validated_data.pop('product_feature')
        product_instance = Product.objects.create(**validated_data)

        for feature_data in features_data:
            Product.objects.create(sdasd=product_instance, **feature_data)
"""

# -------- Serialize the place appends ---------------------


class PictureSerializer(serializers.ModelSerializer):
    """ Serialize the list of pictures """
    class Meta:
        model = Picture
        fields = (
            'id',
            'farm',
            'image',
        )
        # read_only_fields = ('farm', )


class CertificateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certificate
        fields = (
            'farm',
            'designation',
            'comment',
        )
        read_only_fields = ('farm',)


class HistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = History
        fields = (
            'farm',
            'location',
            'milestone',
            'duration',
            'comment',
        )
        read_only_fields = ('farm',)


# --------- Serialize farm with all its appends -------------


class FarmListSerializer(serializers.ModelSerializer):
    """ Farm serialisation, nesting all important fields
        to the json """
    class Meta:
        model = Farm
        fields = (
            'id',
            'user',
            'farmName',
            'bio',
            'address',
            'country',
            'region',
            'phone',
            'email',
            'facebook',
            'twitter',
            'linkedin',
            'instagram',
        )

class FarmDetailSerializer(serializers.ModelSerializer):
    """ Farm serialisation, nesting all important fields
        to the json """
    farm_product = ProductSerializer(many=True)
    farm_certificate = CertificateSerializer(many=True)
    farm_history = HistorySerializer(many=True)
    # farm_picture = PictureSerializer(many=True)

    class Meta:
        model = Farm
        fields = (
            'id',
            'user',
            'farmName',
            'bio',
            'address',
            'country',
            'region',
            'phone',
            'email',
            'facebook',
            'twitter',
            'linkedin',
            'instagram',
            'farm_product',
            'farm_certificate',
            'farm_history',
        )

class FarmViewSets(viewsets.ModelViewSet):
    queryset = Farm.objects.all()
    serializer_class = FarmListSerializer
    detail_serializer_class = FarmDetailSerializer
    filter_backend = (DjangoFilterBackend, OrderingFilter,)
    ordering_fields = '__all__'

    def get_serializer_class(self):
        return super().get_serializer_class()

    def get_queryset(self):
        queryset = farm.objects.all()
        product = self.request.query_params.get('farm_product', None)
        name = self.request.query_params.get('farmName', 'coffeeName', None)
        if product is not None:
            queryset = queryset.filter(product__name=product)
        if name is not None:
            queryset = queryset.filter(name=name)
        return queryset




    def create(self, validated_data):
        """ Modify Create for be able to create coffee, and
                pictures instances in the farms view """
        # feature_data = validated_data.pop('product_feature')
        products_data = validated_data.pop('farm_product')
        certificates_data = validated_data.pop('farm_certificate')
        histories_data = validated_data.pop('farm_history')
        features_data =  validated_data.pop('product_feature')
        # picture_data = validated_data.pop('farm_picture')
        certificate_instance = Certificate.objects.create(**certificates_data)
        history_instance = History.objects.create(**histories_data)
        product_instance = Product.objects.create(**products_data, history_instance=history_data)
        for feature in features_data:
            farm_instance = Farm.objects.create(**feature)
        farm = Farm.objects.create(**validated_data, certificate_instance=certificates_data, history_instance=histories_data, product_instance=products_data)

        """
        for product_data in products_data:
            Product.objects.create(farm=farm_instance, **product_data)
        for certificate_data in certificates_data:
            Certificate.objects.create(farm=farm_instance, **certificate_data)
        for history_data in histories_data:
            History.objects.create(farm=farm_instance, **history_data)"""

        return farm

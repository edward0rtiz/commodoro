from django.contrib.auth.models import User
from products.models import Product, Feature
from .models import Farm, Certificate, History, Picture
# from users.models import Profile
from rest_framework import serializers, fields


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
            'product',
            'id',
            'title',
            'percentage',
        )
        read_only_fields = ('product',)


class ProductSerializer(serializers.ModelSerializer):
    product_feature = FeatureSerializer(many=True)

    class Meta:
        model = Product
        fields = (
            'farm',
            'id',
            'coffeeName',
            'description',
            'price',
            'variety',
            'processing',
            'crop_year',
            'product_feature',
        )
        read_only_fields = ('farm',)


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


class FarmSerializer(serializers.ModelSerializer):
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

    def create(self, validated_data):
        """ Modify Create for be able to create coffee, and
                pictures instances in the farms view """
        products_data = validated_data.pop('farm_product')
        certificates_data = validated_data.pop('farm_certificate')
        histories_data = validated_data.pop('farm_history')
        # picture_data = validated_data.pop('farm_picture')
        farm_instance = Farm.objects.create(**validated_data)

        for product_data in products_data:
            Product.objects.create(farm=farm_instance, **product_data)
        for certificate_data in certificates_data:
            Certificate.objects.create(farm=farm_instance, **certificate_data)
        for history_data in histories_data:
            History.objects.create(farm=farm_instance, **history_data)

        return farm_instance

    def update(self, instance, validated_data):
        """Update the instance of Farm, and its linked products """
        coffees_data = validated_data.pop('farm_coffee')
        coffees = (instance.farm_coffee).all()
        coffees = list(coffees)
        instance.farm_name = validated_data.get(
            'farm_name', instance.farm_name)
        instance.owner_name = validated_data.get(
            'owner_name', instance.owner_name)
        instance.description = validated_data.get(
            'description', instance.description)
        instance.region = validated_data.get('region', instance.region)
        instance.country = validated_data.get('country', instance.country)

        for coffee_data in coffees_data:
            coffee = coffees.pop(0)
            coffee.name = coffee_data.get('name', coffee.name)
            coffee.description = coffee_data.get(
                'description', coffee.description)
            coffee.price = coffee_data.get('price', coffee.price)
            coffee.variety = coffee_data.get('variety', coffee.variety)
            coffee.processing = coffee_data.get(
                'processing', coffee.processing)
            coffee.crop_year = coffee_data.get(
                'crop_year', coffee.crop_year)
            coffee.couping_score = coffee_data.get(
                'couping_score', coffee.couping_score)
        return instance

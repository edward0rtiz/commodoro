from django.contrib.auth.models import User
from products.models import Product, Feature
from .models import Farm, Certificate, History, Picture
# from users.models import Profile
from rest_framework import serializers, fields
from rest_framework.authtoken.models import Token

class UserSerializer(serializers.ModelSerializer):
    """ Serialization of the User, calling just
    some fields, and nesting the Profile serialization """
    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'password',
            'first_name',
            'last_name',
            'email',
        )
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user
# --------- Serialize all about Products --------------------


class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = (
            'id',
            'farm',
            'title',
            'percentage',
        )
        read_only_fields = ('farm',)



class ProductSerializer(serializers.ModelSerializer):
    # product_feature = FeatureSerializer(many=True)
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
            # 'product_feature',
        )
        read_only_fields = ('farm', )


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
class FarmSerializer(serializers.ModelSerializer):
    """ Farm serialisation, nesting all important fields
        to the json """
    farm_product = ProductSerializer(many=True)
    farm_feature = FeatureSerializer(many=True)
    farm_certificate = CertificateSerializer(many=True)
    farm_history = HistorySerializer(many=True)
    # farm_picture = PictureSerializer(many=True)

    class Meta:
        model = Farm
        fields = (
            'id',
            'user',
            'farmName',
            'profilePic',
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
            'farm_feature',
            'farm_certificate',
            'farm_history',
        )

    def create(self, validated_data):
        """ Modify Create for be able to create coffee, and
                pictures instances in the farms view """
        # feature_data = validated_data.pop('product_feature')
        products_data = validated_data.pop('farm_product')
        features_data = validated_data.pop('farm_feature')
        certificates_data = validated_data.pop('farm_certificate')
        histories_data = validated_data.pop('farm_history')
        # picture_data = validated_data.pop('farm_picture')
        farm_instance = Farm.objects.create(**validated_data)

        for product_data in products_data:
            Product.objects.create(farm=farm_instance, **product_data)
        for feature_data in features_data:
            Feature.objects.create(farm=farm_instance, **feature_data)
        for certificate_data in certificates_data:
            Certificate.objects.create(farm=farm_instance, **certificate_data)
        for history_data in histories_data:
            History.objects.create(farm=farm_instance, **history_data)

        return farm_instance

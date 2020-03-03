from django.contrib.auth.models import User
from products.models import Coffee
from .models import Farm, Picture
from users.models import Profile
from rest_framework import serializers, fields


class ProfileSerializer(serializers.ModelSerializer):
	""" Serialization of the profile, for a future
	User serialization """
	class Meta:
		model = Profile
		fields = (
			'id',
			'user',
			'image'
			)

class UserSerializer(serializers.ModelSerializer):
	""" Serialization of the User, calling just
	some fields, and nesting the Profile serialization """
	profile_user = ProfileSerializer(read_only=True)

	class Meta:
		model = User
		fields = (
			'id',
			'username',
			'first_name',
			'last_name',
			'email',
			'profile_user'
			)

class CoffeeSerializer(serializers.ModelSerializer):
	""" Serialize the coffee, for a future farm
	serialization """
	class Meta:
		model = Coffee
		fields = (
			'id',
			'farm',
			'name',
			'description',
			'price',
			'variety',
			'processing',
			'crop_year',
			'couping_score'
			) 
		read_only_fields = ('farm', )

class PictureSerializer(serializers.ModelSerializer):
	""" Serialize the list of pictures """
	class Meta:
		model = Picture
		fields = (
			'id',
			'farm',
			'image'
			)
		#read_only_fields = ('farm', )

class FarmSerializer(serializers.ModelSerializer):
	""" Farm serialisation, nesting all important fields
	to the json """
	farm_coffee = CoffeeSerializer(many=True)
	#farm_picture = PictureSerializer(many=True)
	class Meta:
		model = Farm
		fields = (
			'id',
			'farm_name',
			'description',
			'region',
			'country',
			'farmer',
			'farm_coffee',
			#'farm_picture'
			)
	def create(self,validated_data):
		""" Modify Create for be able to create coffee, and 
		pictures instances in the farms view """
		coffees_data = validated_data.pop('farm_coffee')
		#picture_data = validated_data.pop('farm_picture')
		farm_instance = Farm.objects.create(**validated_data)

		for coffee_data in coffees_data:
			Coffee.objects.create(farm=farm_instance, **coffee_data)
		"""for picture in picture_data:
			Picture.objects.create(farm=farm_instance, **picture_data)"""
		
		return farm_instance

	def update(self, instance, validated_data):
		"""Update the instance of Farm, and its linked products """
		coffees_data = validated_data.pop('farm_coffee')
		coffees = (instance.farm_coffee).all()
		coffees = list(coffees)
		instance.farm_name = validated_data.get('farm_name', instance.farm_name)
		instance.owner_name = validated_data.get('owner_name', instance.owner_name)
		instance.description = validated_data.get('description', instance.description)
		instance.region = validated_data.get('region', instance.region)
		instance.country = validated_data.get('country', instance.country)

		for coffee_data in coffees_data:
			coffee = coffees.pop(0)
			coffee.name = coffee_data.get('name', coffee.name)
			coffee.description = coffee_data.get('description', coffee.description)
			coffee.price = coffee_data.get('price', coffee.price)
			coffee.variety = coffee_data.get('variety', coffee.variety)
			coffee.processing = coffee_data.get('processing', coffee.processing)
			coffee.crop_year = coffee_data.get('crop_year', coffee.crop_year) 
			coffee.couping_score = coffee_data.get('couping_score', coffee.couping_score)
		return instance

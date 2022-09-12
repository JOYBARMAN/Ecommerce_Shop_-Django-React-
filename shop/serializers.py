from dataclasses import fields
from urllib import response
from rest_framework import serializers
from .models import *
from django.contrib.auth.models import User


class ProductSerializers (serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class CategorySerializers (serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"


class GeeksSerializer(serializers.HyperlinkedModelSerializer):
    # specify model and fields
    class Meta:
        model = GeeksModel
        fields = ('title', 'description')


class UserSerializer (serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("id", "username", "password","first_name", "last_name","email")


class ProfileSerializer(serializers.ModelSerializer):
    class Mets:
        model = Profile
        fields = "__all__"
        read_only_fields = ["prouser"]

        def validate(self,attrs):
            attrs['prouser']=self.context['request'].user
            return attrs

        def to_representation (self,instance):
            response = super().to_representation(instance)
            response ['prouser'] = UserSerializer(instance.prouser).data
            return response
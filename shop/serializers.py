from dataclasses import fields
from rest_framework import serializers
from .models import *

class ProductSerializers (serializers.ModelSerializer):
    class Meta :
        model = Product
        fields = "__all__"

class CategorySerializers (serializers.ModelSerializer):
    class Meta :
        model = Category
        fields = "__all__"

class GeeksSerializer(serializers.HyperlinkedModelSerializer):
    # specify model and fields
    class Meta:
        model = GeeksModel
        fields = ('title', 'description')
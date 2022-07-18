from rest_framework import generics
from .models import *
from .serializers import *

class ListProduct (generics.ListAPIView):
    queryset=Product.objects.all().order_by("-id")
    serializer_class=ProductSerializers

class DetailProduct (generics.RetrieveAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializers
    # lookup_field="id"

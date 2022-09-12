from rest_framework import generics ,viewsets,views
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

class ListProduct (generics.ListAPIView):
    queryset=Product.objects.all().order_by("-id")
    serializer_class=ProductSerializers

class DetailProduct (generics.RetrieveAPIView):
    queryset=Product.objects.all()
    serializer_class=ProductSerializers
    # lookup_field="id"

class CategoryView (viewsets.ModelViewSet):
    def list (self,request):
        query=Category.objects.all().order_by("-id")
        serializers =CategorySerializers(query,many=True)
        return Response(serializers.data)
    # queryset = Category.objects.all().order_by("-id")
    # serializer_class =CategorySerializers

    def retrieve(self, request, pk=None):
        query=Category.objects.get(id=pk)
        serializers = CategorySerializers(query)
        productCategory=Product.objects.filter(category_id=serializers.data['id'])
        categorySerializers=ProductSerializers(productCategory,many=True)
        return Response(categorySerializers.data)


class ProductViewSet (viewsets.ModelViewSet):
    queryset = Product.objects.all().order_by("-id")
    serializer_class=ProductSerializers

class GeeksViewSet(viewsets.ModelViewSet):
    queryset = GeeksModel.objects.all()
    serializer_class = GeeksSerializer


class ProfileView(views.APIView):
    authentication_classes=[TokenAuthentication,]
    permission_classes=[IsAuthenticated,]
    def get(self,request):
        try:
            query = Profile.objects.get(prouser=request.user)
            serializers=ProfileSerializer(query)
            response_msg ={"error":False,"data":serializers.data}
        except:
            response_msg = {"error":True,"message":"Something Went Wrong"}
        return Response(response_msg)
       

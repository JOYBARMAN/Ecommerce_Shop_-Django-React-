from rest_framework import generics ,viewsets,views
from .models import *
from .serializers import *
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404

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
       
# class ProfileView(views.APIView):
#     # authentication_classes=[TokenAuthentication,]
#     # permission_classes=[IsAuthenticated,]
#     def get(self,request):
#         # try:
#         #     query = Profile.objects.get(prouser=request.user)
#         #     serializers=ProfileSerializer(query)
#         #     response_msg ={"error":False,"data":serializers.data}
#         # except:
#         #     response_msg = {"error":True,"message":"Something Went Wrong"}
#         # return Response(response_msg)
#         query = User.objects.all()
#         serializers = UserSerializer(query)
#         return Response(serializers.data)

# class ProfileView (viewsets.ModelViewSet):
#     authentication_classes=[TokenAuthentication,]
#     permission_classes=[IsAuthenticated,]
#     queryset=Profile.objects.all().order_by("-id")
#     serializer_class=ProfileSerializer
#     def get (self,request):
#         query = Profile.objects.get(prouser_id =request.user.id)
#         serializers=ProfileSerializer(query)
#         response_msg ={"error":False,"data":serializers.data}
#         return Response(response_msg)

    # def retrieve(self, request,pk=1):
    #     queryset = Profile.objects.all()
    #     user = get_object_or_404(queryset, id=pk)
    #     serializer = ProfileSerializer(user)
    #     return Response(serializer.data)


class UpdateProfileView(views.APIView):
    authentication_classes=[TokenAuthentication,]
    permission_classes=[IsAuthenticated,]

    def post (self,request):
        try :
            user = request.user
            data = request.data
            user_obj = User.objects.get(username=user)
            user_obj.first_name = data['first_name']
            user_obj.last_name = data ['last_name']
            user_obj.email = data['email']
            user_obj.save()
            
            response_msg ={"error":False,"message":"Sucessfully Update"}
        except :
            response_msg ={"error":True,"message":"something went wrong "}

        return Response(response_msg)
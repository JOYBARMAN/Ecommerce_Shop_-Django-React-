from django.urls import path,include
from .views import *
from rest_framework import routers


route = routers.DefaultRouter()
route.register("category",CategoryView,basename="category")
route.register("product",ProductViewSet,basename="product")


urlpatterns = [
    path("",include(route.urls)),
    # path('product/',ListProduct.as_view(),name="product"),
    # path('product/<int:pk>/',DetailProduct.as_view(),name="productdetail"),
]

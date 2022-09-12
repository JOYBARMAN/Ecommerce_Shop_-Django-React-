from django.urls import path,include
from .views import *
from rest_framework import routers


route = routers.DefaultRouter()
route.register("category",CategoryView,basename="category")
route.register("product",ProductViewSet,basename="product")
route.register('geeks', GeeksViewSet,basename="geeks")
# route.register('profile',ProfileView,basename="profile")


urlpatterns = [
    path("",include(route.urls)),
    path('profile/',ProfileView.as_view(),name="profile"),
    # path('product/<int:pk>/',DetailProduct.as_view(),name="productdetail"),
]

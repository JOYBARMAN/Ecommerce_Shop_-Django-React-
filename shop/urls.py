from django.urls import path
from .views import *


urlpatterns = [
    path('product/',ListProduct.as_view(),name="product"),
    path('product/<int:pk>/',DetailProduct.as_view(),name="productdetail"),
]

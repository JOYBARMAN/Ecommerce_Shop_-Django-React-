from pyexpat import model
from django.db import models
from django.contrib.auth.models import User


class Profile (models.Model):
    prouser = models.OneToOneField(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to="profile/", null=True, blank=True)

    def __str__(self):
        return self.prouser.username


class Category (models.Model):
    title = models.CharField(max_length=100)
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title


class Product (models.Model):
    title = models.CharField(max_length=200)
    date = models.DateField(auto_now_add=True)
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL, null=True, blank=True)
    image = models.ImageField(upload_to="products/")
    market_price = models.PositiveIntegerField()
    selling_price = models.PositiveIntegerField()
    description = models.TextField()

    def __str__(self):
        return self.title


class Cart (models.Model):
    customer = models.ForeignKey(Profile, on_delete=models.CASCADE)
    total = models.PositiveIntegerField()
    complit = models.BooleanField(default=False)
    date = models.DateField(auto_now_add=True)

    def __str__(self) :
        return f"Cart Id = {self.id} , Cart Complete = {self.complit}"

class CartProduct (models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ManyToManyField(Product)
    price = models.PositiveIntegerField()
    quantity = models.PositiveIntegerField()
    subtotal = models.PositiveIntegerField()

    def __str__(self):
        return f"Cart = {self.cart.id} , CartProduct = {self.id} , Quantity = {self.quantity}"


Order_Status = {
    ("Order Received", "Order Received"),
    ("Order Processing", "Order Processing"),
    ("On The Way", "On The Way"),
    ("Order Complete", "Order complete"),
    ("Order Cancel", "Order Cancel"),
}


class Order (models.Model):
    cart = models.OneToOneField(Cart, on_delete=models.CASCADE)
    address = models.CharField(max_length=255)
    mobile = models.CharField(max_length=15)
    email = models.CharField(max_length=50)
    total = models.PositiveIntegerField()
    discount = models.PositiveIntegerField()
    order_status = models.CharField(
        max_length=255, choices=Order_Status, default="Order Received")
    date = models.DateField(auto_now_add=True)
    payment = models.BooleanField(default=False)

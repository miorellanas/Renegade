from django.contrib import admin
from .models import StoreItem
from .models import ShoppingCart

admin.site.register(StoreItem)
admin.site.register(ShoppingCart)

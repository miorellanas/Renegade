from django.db import models

class StoreItem(models.Model):
    item_id = models.IntegerField(primary_key=True)
    baseimg = models.ImageField(upload_to='./media/')
    name = models.CharField(max_length=20)
    type = models.CharField(max_length=20)
    description = models.TextField()
    price = models.FloatField()
    
class ShoppingCart(models.Model):
    cart_id = models.CharField(primary_key=True, max_length=8)
    storeItem = models.ForeignKey(StoreItem, related_name='shopping_cart', on_delete=models.CASCADE)

    
    
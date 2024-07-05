# Generated by Django 5.0.6 on 2024-07-04 06:38

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('renapp', '0002_rename_id_storeitem_item_id_alter_storeitem_baseimg'),
    ]

    operations = [
        migrations.CreateModel(
            name='ShoppingCart',
            fields=[
                ('cart_id', models.IntegerField(primary_key=True, serialize=False)),
                ('storeItem', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='shopping_cart', to='renapp.storeitem')),
            ],
        ),
    ]

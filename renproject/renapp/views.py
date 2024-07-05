from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import StoreItem
from .models import ShoppingCart
from django.db.models.aggregates  import Sum
from django.contrib.auth.models import User, auth
from django.contrib import messages
import random

def index(request):
    return render(request, 'index.html')

def game(request):
    return render(request, 'game.html')

def zones(request):
    return render(request, 'zones.html')

def weapons(request):
    return render(request, 'weapons.html')

def store(request):
    storeItem = StoreItem.objects.all()
    return render(request, 'store.html', {'storeitem': storeItem})

def login(request):
    if request.method == 'POST':
        username = request.POST['user']
        password = request.POST['pass']
        
        user = auth.authenticate(username=username, password=password)
        
        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            messages.info(request, 'Credentials invalid')
            return redirect('login')
            
    
    return render(request, 'login.html')

def register(request):
    print('4')
    if request.method == 'POST':
        username = request.POST['user']
        email = request.POST['email']
        password = request.POST['pass']
        repassword = request.POST['repass']
        print('0')
        if password == repassword:
            if User.objects.filter(email=email).exists():
                messages.info(request, 'Email already used')
                print('1')
                return redirect('register')
            elif User.objects.filter(username=username).exists():
                messages.info(request, 'This Username already exist')
                print('2') 
                return redirect('register')
            else:
                user = User.objects.create_user(username=username, email=email, password=password)
                user.save()
                return redirect('login')
        else:
            messages.info(request, 'Passwords are different')
            print('5')
            return redirect('register')
    print('6')
    return render(request, 'register.html')

def purchaseF(request, id):
    
    ran = random.randint(1000, 9999)
    
    primaryKey = 'CAR' + str(ran)
    
    newItem = StoreItem.objects.get(pk=id)
    newCart = ShoppingCart(cart_id=primaryKey, storeItem=newItem)
    
    newCart.save()
    
    shoppingCart = ShoppingCart.objects.all()
    
    subTotal = 0.0
    
    for items in shoppingCart:
        subTotal += items.storeItem.price
    
    print(subTotal)
    
    return render(request, 'purchase.html', {'shoppingCart': shoppingCart, 'subTotal': subTotal})

def purchaseD(request, id):
    ShoppingCart.objects.get(pk=id).delete()
    
    shoppingCart = ShoppingCart.objects.all()
    
    subTotal = 0.0
    
    for items in shoppingCart:
        subTotal += items.storeItem.price
    
    #subTotal = shoppingCart.aaggregate(subTotal=Sum('price'))['subTotal']
    
    return render(request, 'purchase.html', {'shoppingCart': shoppingCart, 'subTotal': subTotal})

def purchase(request, id):
    item = StoreItem.objects.get(pk=id)
    
    print(item)
    
    return render(request, 'purchase.html', {'item': item})
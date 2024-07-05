from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('', views.index, name='index'),
    path('game/', views.game, name='game'),
    path('zones/', views.zones, name='zones'),
    path('weapons/', views.weapons, name='weapons'),
    path('store/', views.store, name='store'),
    path('login', views.login, name='login'),
    path('register/', views.register, name='register'),
    path('purchase/<int:id>/', views.purchaseF, name='purchase'),
    path('purchase/<str:id>/', views.purchaseD, name='purchaseD')
    
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
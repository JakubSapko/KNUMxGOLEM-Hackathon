from django.urls import path
from . import views

urlpatterns=[
    path('', views.getRoutes),
    path('test_data/', views.getTest),
    path('test/', views.peepeepoopoo)
]
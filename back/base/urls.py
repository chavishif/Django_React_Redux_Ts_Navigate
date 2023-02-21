from . import views
from django.contrib import admin
from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)


urlpatterns = [
    path('index/',views.index ),
    path('private/',views.private ),
    path('product/', views.ProductView.as_view()),
    path('product/<pk>', views.ProductView.as_view()),
    path('gallery/', views.GalleryView.as_view()),
    path('gallery/<pk>', views.GalleryView.as_view()),
    path('profile/', views.ProfileView.as_view()),
    path('profile/<pk>', views.ProfileView.as_view()),
    path('albums/', views.AlbumsView.as_view()),
    path('albumstype/', views.AlbumsTypeView.as_view()),
    path('login/', views.MyTokenObtainPairView.as_view()),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.register),



]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

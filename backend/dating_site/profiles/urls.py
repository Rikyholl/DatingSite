from django.urls import path
from . import views

urlpatterns = [
    # Другие маршруты вашего приложения...
    path('api/profiles/<int:pk>/', views.ProfileDetailView.as_view(), name='profiles-detail'),
]
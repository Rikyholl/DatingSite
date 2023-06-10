from django.urls import path
from profiles.views import ProfileView, ProfileDetailView

app_name = 'api'

urlpatterns = [
    path('profiles/', ProfileView.as_view()),
    path('profiles/<int:pk>/', ProfileDetailView.as_view()),
]
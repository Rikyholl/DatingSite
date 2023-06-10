from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.AutoField(primary_key=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=False)
    first_name = models.CharField(max_length=100, null=False)
    age = models.IntegerField()
    email = models.EmailField(unique=True, null=False)
    description = models.TextField(max_length=300)

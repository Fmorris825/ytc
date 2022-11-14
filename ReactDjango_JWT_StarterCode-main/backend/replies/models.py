from django.db import models
from authentication.models import User


# Create your models here.

class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    comment = models.CharField(max_length=100)
    text = models.CharField(max_length=100)
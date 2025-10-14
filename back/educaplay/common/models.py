from django.db import models
from django.contrib.auth.models import User

class BaseQuestion(models.Model):
    text = models.TextField()
    options = models.JSONField(default=None)
    correct_answer = models.CharField(max_length=1)

    class Meta:
        abstract = True

class BaseSession(models.Model):
    active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True

class BaseAnswer(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    answer = models.CharField(max_length=200)
    correct = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True

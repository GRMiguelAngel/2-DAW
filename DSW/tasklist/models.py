from django.db import models


# Create your models here.
class Task(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField(max_length=100, unique=True)
    content = models.TextField()
    deadline = models.DateTimeField(null=False)
    checkbox = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)


def __str__(self):
    return self.title

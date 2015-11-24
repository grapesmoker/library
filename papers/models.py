from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Document(models.Model):

    title = models.CharField(max_length=1000)
    authors = models.ForeignKey('Author')
    location = models.CharField(max_length=2000)


class Author(models.Model):

    first_name = models.CharField(max_length=250)
    middle_name = models.CharField(max_length=500)
    last_name = models.CharField(max_length=250)

class LibraryUser(models.Model):

    user = models.OneToOneField(User)


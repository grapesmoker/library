from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Document(models.Model):

    title = models.CharField(max_length=1000)
    authors = models.ForeignKey('Author')
    location = models.CharField(max_length=2000)
    library = models.ForeignKey('Library', null=True)


class Author(models.Model):

    first_name = models.CharField(max_length=250)
    middle_name = models.CharField(max_length=500)
    last_name = models.CharField(max_length=250)


class LibraryUser(models.Model):

    user = models.OneToOneField(User)

    first_name = models.CharField(max_length=250)
    middle_name = models.CharField(max_length=250)
    last_name = models.CharField(max_length=250)

    # libraries = models.ForeignKey('Library', null=True)


class DocumentRoot(models.Model):

    path = models.CharField(max_length=5000)
    library = models.ForeignKey('Library', null=True)


class Library(models.Model):

    name = models.CharField(max_length=500)
    owner = models.ForeignKey(LibraryUser, null=True)
    description = models.TextField()
    # documents = models.ForeignKey(Document)
    # root_directories = models.ForeignKey(DocumentRoot)


class Publication(models.Model):

    name = models.CharField(max_length=500)
    url = models.URLField(max_length=500)


class Journal(Publication):

    pass


class Article(Document):

    pass


class Book(Document):

    isbn = models.CharField(max_length=25)

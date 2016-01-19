from django.db import models
from django.contrib.auth.models import User

import json
# Create your models here.


class Document(models.Model):

    title = models.CharField(max_length=1000)
    authors = models.ManyToManyField('Author', null=True)
    location = models.CharField(max_length=2000)
    library = models.ForeignKey('Library', null=True)

    def to_dict(self):
        authors = [auth.to_dict() for auth in self.authors.all()]
        doc_dict = {'authors': authors,
                    'title': self.title,
                    'location': self.location,
                    'id': self.id}
        return doc_dict

    def to_json(self):
        return json.dumps(self.to_dict())


class Author(models.Model):

    first_name = models.CharField(max_length=250)
    middle_name = models.CharField(max_length=500)
    last_name = models.CharField(max_length=250)

    def to_dict(self):
        auth_dict = {'first_name': self.first_name,
                     'middle_name': self.middle_name,
                     'last_name': self.last_name,
                     'id': self.id}
        return auth_dict

    def to_json(self):
        return json.dumps(self.to_dict())


class LibraryUser(models.Model):

    user = models.OneToOneField(User)

    first_name = models.CharField(max_length=250)
    middle_name = models.CharField(max_length=250)
    last_name = models.CharField(max_length=250)


class DocumentRoot(models.Model):

    path = models.CharField(max_length=5000)
    library = models.ForeignKey('Library', null=True)


class Library(models.Model):

    name = models.CharField(max_length=500)
    owner = models.ForeignKey(LibraryUser, null=True)
    description = models.TextField()

    def to_dict(self):
        docs = self.document_set.all()
        lib_dict = {'name': self.name,
                    'id': self.id,
                    'description': self.description,
                    'documents': []}
        for doc in docs:
            lib_dict['documents'].append(doc.to_dict())
        return lib_dict

    def to_json(self):
        return json.dumps(self.to_dict())


class Publication(models.Model):

    name = models.CharField(max_length=500)
    url = models.URLField(max_length=500)


class Journal(Publication):

    pass


class Article(Document):

    pass


class Book(Document):

    isbn = models.CharField(max_length=25)

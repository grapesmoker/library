from tastypie.resources import ModelResource
from tastypie.authorization import Authorization
from tastypie import fields
from models import Library, LibraryUser, DocumentRoot, Document
from django.contrib.auth.models import User


class UserResource(ModelResource):

    class Meta:
        queryset = LibraryUser.objects.all()


class DocumentRootResource(ModelResource):

    library = fields.ForeignKey('papers.api.LibraryResource', 'library')

    class Meta:
        queryset = DocumentRoot.objects.all()
        resource_name = 'document_root'
        authorization = Authorization()


class LibraryResource(ModelResource):

    user = fields.ForeignKey(UserResource, 'owner')
    location = fields.ToManyField(DocumentRootResource, 'documentroot_set', full=True, readonly=True)

    class Meta:
        queryset = Library.objects.all()
        resource_name = 'library'
        authorization = Authorization()


class DocumentResource(ModelResource):

    library = fields.ForeignKey('papers.api.LibraryResource', 'library')

    class Meta:
        queryset = Document.objects.all()
from tastypie.resources import ModelResource
from tastypie.paginator import Paginator
from tastypie.authorization import Authorization
from tastypie.serializers import Serializer
from tastypie import fields
from models import Library, LibraryUser, DocumentRoot, Document, Author, Journal, Article, Book, Category
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


class AuthorResource(ModelResource):

    class Meta:
        queryset = Author.objects.all().order_by('last_name').order_by('first_name').order_by('middle_name')
        resource_name = 'author'
        authorization = Authorization()
        default_format = 'application/json'
        serializer = Serializer()
        always_return_data = True
        # ordering = ['last_name', 'first_name', 'middle_name']

    def obj_create(self, bundle, **kwargs):
        print bundle
        return super(AuthorResource, self).obj_create(bundle)


class DocumentResource(ModelResource):

    library = fields.ForeignKey('papers.api.LibraryResource', 'library')
    authors = fields.ToManyField('papers.api.AuthorResource', 'authors', full=True)

    class Meta:
        queryset = Document.objects.all()
        resource_name = 'document'
        authorization = Authorization()
        always_return_data = True
        paginator_class = Paginator


class JournalResource(ModelResource):

    class Meta:
        queryset = Journal.objects.all()
        resource_name = 'journal'
        authorization = Authorization()
        always_return_data = True
        paginator_class = Paginator


class CategoryResource(ModelResource):

    parent = fields.ForeignKey('papers.api.CategoryResource', 'parent_category', null=True, full=True)

    class Meta:
        queryset = Category.objects.all()
        resource_name = 'category'
        authorization = Authorization()
        always_return_data = True
        paginator_class = Paginator

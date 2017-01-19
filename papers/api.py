from tastypie.resources import ModelResource
from tastypie.paginator import Paginator
from tastypie.authorization import Authorization
from tastypie.serializers import Serializer
from tastypie import fields
from models import Library, LibraryUser, DocumentRoot, Document, Author
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
        queryset = Author.objects.all()
        resource_name = 'author'
        authorization = Authorization()
        default_format = 'application/json'
        serializer = Serializer()
        always_return_data = True

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

    def hydrate_authors(self, bundle):

        #authors = [a for a in bundle.data['authors'] if a.strip() != '']

        print 'raw bundle:', bundle.data
        # author_ids = []
        # try:
        #     for author in authors:
        #         author = author.split(',')
        #         first_name = author[1].strip()
        #         last_name = author[0].strip()
        #         if len(author) > 2:
        #             middle_name = author[2].strip()
        #         else:
        #             middle_name = None
        #         if first_name != '' and last_name != '':
        #             if middle_name:
        #                 auth = Author.objects.filter(first_name=first_name, last_name=last_name, middle_name=middle_name)
        #             else:
        #                 auth = Author.objects.filter(first_name=first_name, last_name=last_name)
        #             print 'retrieved ', auth, auth.count(), auth[0]
        #             if auth.count() > 0:
        #                 print auth[0], auth[0].id
        #                 author_ids.append(auth[0].id)
        # except Exception as ex:
        #     print ex
        # print 'author ids: ', author_ids
        # bundle.data['authors'] = str(author_ids)
        # print 'bundle is:', bundle

        return bundle

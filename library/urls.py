from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.auth.views import login as auth_login, logout as auth_logout
from django.conf.urls.static import static
from django.conf import settings
from tastypie.api import Api

from papers.views import *
from papers.api import *

library_api = Api(api_name='library')
library_api.register(UserResource())
library_api.register(LibraryResource())
library_api.register(DocumentResource())
library_api.register(DocumentRootResource())

urlpatterns = [
    # Examples:
    # url(r'^$', 'library.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^main/', main),
    url(r'^$', main),
    url(r'^register/', register),
    url(r'^accounts/login/$', auth_login),
    url(r'^accounts/logout/$', auth_logout),
    url(r'^logout/$', lib_logout),
    url(r'^new_library/', new_library),
    # AJAX calls
    #url(r'^library/(?P<lib_id>[0-9]+)/$', library),
    url(r'^api/', include(library_api.urls))
]
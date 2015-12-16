from django.conf.urls import include, url
from django.contrib import admin
from django.contrib.auth.views import login as auth_login, auth_logout
from django.conf.urls.static import static
from django.conf import settings

from papers.views import *

urlpatterns = [
    # Examples:
    # url(r'^$', 'library.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^main/', main),
    url(r'^$', main),
    url(r'^register/', register),
    url(r'^accounts/login/', auth_login),
    url(r'^accounts/logout/', auth_logout),
    url(r'^new_library/', new_library)
]
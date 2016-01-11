from django.shortcuts import render

# Create your views here.
from django.template import Context, RequestContext
from django.shortcuts import render_to_response
from django import forms
from django.forms.formsets import formset_factory
from django.forms.models import modelformset_factory
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponse, HttpResponseRedirect
from django.views.generic import ListView
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from django.contrib.auth.decorators import login_required

from forms import *
from models import *
from utils import *

def main(request):

    if request.user.is_authenticated():
        user = request.user.libraryuser
        libraries = user.library_set.all()
    else:
        user = None

    return render_to_response('main.html', {'user': user,
                                            'libraries': libraries})


def library(request):

    return render_to_response('library.html')


def register(request):

    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            new_user = form.save()
            new_lib_user = LibraryUser()
            new_lib_user.user = new_user
            new_lib_user.save()
            login(request, new_user)
            return HttpResponseRedirect('/')

    else:
        form = RegistrationForm()

    return render(request, 'registration/register.html', {'form': form})


@login_required
def new_library(request):

    user = request.user.libraryuser

    if request.method == 'GET':
        form = NewLibraryForm()

        return render(request, 'new_library.html', {'form': form})

    elif request.method == 'POST':

        form = NewLibraryForm(request.POST)
        if form.is_valid():
            new_lib = Library()
            new_lib.name = form.cleaned_data['name']
            new_lib.description = form.cleaned_data['description']
            new_root = DocumentRoot()
            new_root.path = form.cleaned_data['root']
            new_lib.save()
            new_root.save()
            new_lib.documentroot_set.add(new_root)
            new_lib.owner = user
            new_lib.save()

            records = find_pdfs(new_root.path)

            for record in records:
                doc = Document()
                doc.title = record.title
                doc.authors = record.authors

            return HttpResponseRedirect('/')
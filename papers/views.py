from django.shortcuts import render

# Create your views here.
from django.template import Context, RequestContext
from django.shortcuts import render_to_response
from django import forms
from django.forms.formsets import formset_factory
from django.forms.models import modelformset_factory
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.views.generic import ListView
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.db.models import Q

from forms import *
from models import *
from utils import *


def main(request):

    if request.user.is_authenticated():
        user = request.user.libraryuser
        libraries = user.library_set.all()
    else:
        user = None
        libraries = []

    return render_to_response('main.html', {'user': user,
                                            'libraries': libraries})


def register(request):

    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            new_user = form.save()
            new_lib_user = LibraryUser()
            new_lib_user.user = new_user
            new_lib_user.save()
            user = authenticate(username=form.cleaned_data['username'], password=form.cleaned_data['password2'])
            login(request, user)
            return HttpResponseRedirect('/')

    else:
        form = RegistrationForm()

    return render(request, 'registration/register.html', {'form': form})


@login_required
def lib_logout(request):

    logout(request)
    return HttpResponseRedirect('/')


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
                doc.location = record.path
                doc.library = new_lib
                doc.save()
                for author in record.authors:
                    names = author.split()
                    first_name = names[0]
                    last_name = names[-1]
                    if len(names) > 2:
                        middle_name = ' '.join(names[1:-1])
                    existing_authors = Author.objects.filter(first_name=first_name, middle_name=middle_name, last_name=last_name)
                    if len(existing_authors) > 0:
                        author = existing_authors[0]
                    else:
                        author = Author(last_name=last_name, first_name=first_name, middle_name=middle_name)
                        author.save()
                    doc.authors.add(author)

            return HttpResponseRedirect('/')


@login_required
def library(request, lib_id):
    if request.method == 'GET':
        user = request.user.libraryuser
        lib = Library.objects.get(id=lib_id)

        return JsonResponse(lib.to_dict())

    elif request.method == 'PUT':

        user = request.user.libraryuser


@login_required
def search(request, model):

    if request.method == 'GET':
        term = request.GET['term']

        if model == 'author':
            authors = Author.objects.filter(
                    Q(last_name__icontains=term) |
                    Q(first_name__icontains=term) |
                    Q(middle_name__icontains=term)
            ).order_by('last_name')
            authors = [author.to_dict() for author in authors]
            return JsonResponse({'authors': authors})
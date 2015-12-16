from crispy_forms.helper import FormHelper
from crispy_forms.layout import Submit
from django.forms import *
from django.contrib.auth.forms import UserCreationForm
from models import *


class RegistrationForm(UserCreationForm):

    def __init__(self, *args, **kwargs):
        super(UserCreationForm, self).__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_class = 'form-horizontal'
        self.helper.form_action = '/register/'
        self.helper.form_method = 'post'
        self.helper.add_input(Submit('submit', 'Create account'))


class NewLibraryForm(forms.Form):

    name = CharField(required=True)
    description = CharField(widget=Textarea(attrs={'rows': 5, 'class': 'expanding'}), required=True)
    root = CharField(required=True, help_text='Enter the local path that serves as the library root.')

    def __init__(self, *args, **kwargs):
        super(NewLibraryForm, self).__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.form_action = '/new_library/'
        self.helper.form_method = 'post'
        self.helper.add_input(Submit('submit', 'Create library'))

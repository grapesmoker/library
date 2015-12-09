# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('papers', '0002_libraryuser'),
    ]

    operations = [
        migrations.AddField(
            model_name='document',
            name='location',
            field=models.CharField(default='', max_length=2000),
            preserve_default=False,
        ),
    ]

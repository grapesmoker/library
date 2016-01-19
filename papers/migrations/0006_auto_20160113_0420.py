# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('papers', '0005_auto_20151216_0310'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='document',
            name='authors',
        ),
        migrations.AddField(
            model_name='document',
            name='authors',
            field=models.ManyToManyField(to='papers.Author', null=True),
        ),
    ]

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('papers', '0012_auto_20170120_1515'),
    ]

    operations = [
        migrations.AddField(
            model_name='document',
            name='categories',
            field=models.ManyToManyField(to='papers.Category', null=True),
        ),
    ]

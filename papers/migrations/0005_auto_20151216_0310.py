# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('papers', '0004_auto_20151216_0250'),
    ]

    operations = [
        migrations.AlterField(
            model_name='library',
            name='owner',
            field=models.ForeignKey(to='papers.LibraryUser', null=True),
        ),
    ]

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('papers', '0010_auto_20170120_0009'),
    ]

    operations = [
        migrations.AlterField(
            model_name='publication',
            name='type',
            field=models.CharField(default=b'Journal', max_length=100, choices=[[b'Journal', b'Journal']]),
        ),
    ]

# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('papers', '0009_auto_20170119_2350'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Journal',
        ),
        migrations.AddField(
            model_name='publication',
            name='type',
            field=models.CharField(default=b'Journal', max_length=100, choices=[(b'Journal', b'Journal')])
        ),
        migrations.CreateModel(
            name='Journal',
            fields=[
            ],
            options={
                'proxy': True,
            },
            bases=('papers.publication',),
        ),
    ]

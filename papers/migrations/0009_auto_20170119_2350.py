# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('papers', '0008_auto_20170119_1937'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Article',
        ),
        migrations.DeleteModel(
            name='Book',
        ),
        migrations.AddField(
            model_name='document',
            name='date',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='document',
            name='isbn',
            field=models.CharField(max_length=25, null=True),
        ),
        migrations.AddField(
            model_name='document',
            name='journal',
            field=models.ForeignKey(to='papers.Journal', null=True),
        ),
        migrations.AddField(
            model_name='document',
            name='pages',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='document',
            name='series',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='document',
            name='type',
            field=models.CharField(default=b'Document', max_length=100, choices=[(b'Document', b'Document'), (b'Article', b'Article'), (b'Book', b'Book')]),
        ),
        migrations.AddField(
            model_name='document',
            name='volume',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='document',
            name='year',
            field=models.IntegerField(null=True),
        ),
        migrations.CreateModel(
            name='Article',
            fields=[
            ],
            options={
                'proxy': True,
            },
            bases=('papers.document',),
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
            ],
            options={
                'proxy': True,
            },
            bases=('papers.document',),
        ),
    ]

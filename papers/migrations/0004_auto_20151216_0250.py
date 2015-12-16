# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('papers', '0003_document_location'),
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('document_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to='papers.Document')),
            ],
            bases=('papers.document',),
        ),
        migrations.CreateModel(
            name='Book',
            fields=[
                ('document_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to='papers.Document')),
                ('isbn', models.CharField(max_length=25)),
            ],
            bases=('papers.document',),
        ),
        migrations.CreateModel(
            name='DocumentRoot',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('path', models.CharField(max_length=5000)),
            ],
        ),
        migrations.CreateModel(
            name='Library',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=500)),
                ('description', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Publication',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=500)),
                ('url', models.URLField(max_length=500)),
            ],
        ),
        migrations.AddField(
            model_name='libraryuser',
            name='first_name',
            field=models.CharField(default='', max_length=250),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='libraryuser',
            name='last_name',
            field=models.CharField(default='', max_length=250),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='libraryuser',
            name='middle_name',
            field=models.CharField(default='', max_length=250),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='Journal',
            fields=[
                ('publication_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to='papers.Publication')),
            ],
            bases=('papers.publication',),
        ),
        migrations.AddField(
            model_name='library',
            name='owner',
            field=models.ForeignKey(to='papers.LibraryUser'),
        ),
        migrations.AddField(
            model_name='documentroot',
            name='library',
            field=models.ForeignKey(to='papers.Library', null=True),
        ),
        migrations.AddField(
            model_name='document',
            name='library',
            field=models.ForeignKey(to='papers.Library', null=True),
        ),
    ]

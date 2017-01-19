# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('papers', '0007_document_abstract'),
    ]

    operations = [
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(null=True)),
                ('parent_category', models.ForeignKey(to='papers.Category')),
            ],
        ),
        migrations.CreateModel(
            name='Editor',
            fields=[
                ('author_ptr', models.OneToOneField(parent_link=True, auto_created=True, primary_key=True, serialize=False, to='papers.Author')),
            ],
            bases=('papers.author',),
        ),
        migrations.AddField(
            model_name='article',
            name='date',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='journal',
            field=models.ForeignKey(to='papers.Journal', null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='pages',
            field=models.CharField(max_length=50, null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='series',
            field=models.CharField(max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='volume',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='article',
            name='year',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='publication',
            name='description',
            field=models.TextField(default=b'', null=True),
        ),
        migrations.AlterField(
            model_name='library',
            name='description',
            field=models.TextField(default=b'', null=True),
        ),
    ]

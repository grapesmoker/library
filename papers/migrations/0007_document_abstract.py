# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('papers', '0006_auto_20160113_0420'),
    ]

    operations = [
        migrations.AddField(
            model_name='document',
            name='abstract',
            field=models.TextField(default=b''),
        ),
    ]

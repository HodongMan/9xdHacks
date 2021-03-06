# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-09-09 07:43
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Message',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('massage', models.IntegerField()),
                ('created_date', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ('-created_date',),
            },
        ),
        migrations.CreateModel(
            name='Number',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.IntegerField()),
            ],
        ),
        migrations.AddField(
            model_name='message',
            name='number',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='message.Number'),
        ),
    ]

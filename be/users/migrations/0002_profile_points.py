# Generated by Django 3.2.10 on 2023-11-07 16:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='points',
            field=models.IntegerField(default=0),
        ),
    ]
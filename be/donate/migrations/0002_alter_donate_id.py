# Generated by Django 3.2.23 on 2023-11-11 07:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('donate', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donate',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
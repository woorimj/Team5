# Generated by Django 3.2.23 on 2023-11-11 07:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myPage', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donation',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='parkvisitpoint',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='shoppingmallreviewpoint',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
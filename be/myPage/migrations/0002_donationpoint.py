# Generated by Django 3.1.6 on 2023-11-09 19:37

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('myPage', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DonationPoint',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('usedPoint', models.IntegerField(default=0)),
                ('pointActivityDate', models.DateTimeField(default=datetime.datetime.now)),
                ('donation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myPage.donation')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]

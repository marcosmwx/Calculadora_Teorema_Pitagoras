# Generated by Django 4.1.5 on 2023-01-23 01:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Calc',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('hipotenusa', models.IntegerField(max_length=2)),
                ('catetoum', models.IntegerField(max_length=2)),
                ('cataetodois', models.IntegerField(max_length=2)),
            ],
        ),
    ]

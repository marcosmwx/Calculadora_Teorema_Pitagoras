# Generated by Django 4.1.5 on 2023-01-25 00:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('calculadora', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='calc',
            name='cataetodois',
        ),
        migrations.AddField(
            model_name='calc',
            name='catetodois',
            field=models.IntegerField(default=3),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='calc',
            name='catetoum',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='calc',
            name='hipotenusa',
            field=models.IntegerField(),
        ),
    ]

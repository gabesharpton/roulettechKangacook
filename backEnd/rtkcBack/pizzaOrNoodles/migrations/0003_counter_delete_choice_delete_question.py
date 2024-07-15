# Generated by Django 5.0.7 on 2024-07-15 03:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pizzaOrNoodles', '0002_question_pub_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='Counter',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('count', models.IntegerField(default=0)),
            ],
        ),
        migrations.DeleteModel(
            name='Choice',
        ),
        migrations.DeleteModel(
            name='Question',
        ),
    ]
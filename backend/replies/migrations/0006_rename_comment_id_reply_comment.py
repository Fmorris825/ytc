# Generated by Django 4.0.4 on 2022-11-21 19:31

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('replies', '0005_rename_comment_reply_comment_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='reply',
            old_name='comment_id',
            new_name='comment',
        ),
    ]

from rest_framework import serializers
from .models import Reply

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['id', 'user_id', 'comment', 'text',]
        depth = 1

from comments.models import Comment
from replies.models import Reply
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ReplySerializer
from rest_framework import status

# Create your views here.

@api_view(['GET'])
def display_replies(request,pk):
    if request.method == 'GET':
        comment = Comment.objects.get(id=pk)
        replies = Reply.objects.filter(comment=comment)
        serializer = ReplySerializer(replies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

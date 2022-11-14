from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import CommentSerializer
from .models import Comment

# Create your views here.

@api_view(['GET', 'POST'])
def get_all_comments(request, fk):
    
    comments = Comment.objects.filter(video_id=fk)
    if request.method == 'GET':
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.errors, status=status.HTTP_201_CREATED)
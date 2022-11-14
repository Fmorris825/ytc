from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .serializers import CommentSerializer
from .models import Comment
from rest_framework.permissions import IsAuthenticated, AllowAny

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_video_comments(request, fk):
    if request.method == 'GET':
        comments = Comment.objects.filter(video_id=fk)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def post_comment_to_video(request):
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.errors, status=status.HTTP_201_CREATED)
from django.urls import path, include
from comments import views

urlpatterns = [
    path('<fk>/', views.get_video_comments),
    path('', views.post_comment_to_video),
    path('<int:pk>/update/', views.edit_comment_by_id),
    path('<int:pk>/replies/', include('replies.urls')),

]

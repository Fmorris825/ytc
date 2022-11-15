from django.urls import path, include
from . import views

urlpatterns = [
    path('replies/', views.display_replies),
    # path('', views.post_reply_to_video)
]

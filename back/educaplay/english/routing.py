from django.urls import path
from . import consumers

websocket_urlpatterns = [
    path('ws/english/<str:session_id>/', consumers.EnglishConsumer.as_asgi()),
]

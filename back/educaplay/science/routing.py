from django.urls import path
from . import consumers

websocket_urlpatterns = [
    path('ws/english/<str:session_id>/', consumers.ScienceConsumer.as_asgi()),
]

from django.urls import path
from . import consumers

websocket_urlpatterns = [
    path('ws/math/<str:session_id>/', consumers.MathematicsConsumer.as_asgi()),
]
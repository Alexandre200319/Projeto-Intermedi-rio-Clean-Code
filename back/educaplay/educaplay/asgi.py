import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
import mathematics.routing
import english.routing
import science.routing
import portuguese.routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'quizgame.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter(
            mathematics.routing.websocket_urlpatterns +
            english.routing.websocket_urlpatterns +
            science.routing.websocket_urlpatterns +
            portuguese.routing.websocket_urlpatterns
        )
    ),
})

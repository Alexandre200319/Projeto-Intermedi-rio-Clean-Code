from django.urls import path, include
from rest_framework.routers import DefaultRouter
from mathematics import views

router = DefaultRouter()
router.register(r'mathematics', views.MathematicsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]

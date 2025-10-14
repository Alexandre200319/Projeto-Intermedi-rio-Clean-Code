from rest_framework import viewsets
from .models import Mathematics
from .serializers import MathematicsSerializer


class MathematicsSerializer(viewsets.GenericViewSet):
    queryset = Mathematics.objects.all()
    serializer_class = MathematicsSerializer
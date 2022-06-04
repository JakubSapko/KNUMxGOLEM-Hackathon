from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import TestSerializer
from base.models import Test

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/test_data',
    ]
    return Response(routes)

@api_view(['GET'])
def getTest(request):
    tests = Test.objects.all()
    serializer = TestSerializer(tests, many=True)
    return Response(serializer.data)
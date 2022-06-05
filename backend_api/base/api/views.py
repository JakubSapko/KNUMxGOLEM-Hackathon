import json
from xmlrpc.client import ResponseError
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.exceptions import BadRequest

from .serializers import TestSerializer
from base.models import Test

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/test_data',
        '/api/test',
    ]
    return Response(routes)

@api_view(['GET'])
def getTest(request):
    tests = Test.objects.all()
    serializer = TestSerializer(tests, many=True)
    return Response(serializer.data)

@api_view(['GET', 'POST'])
def getFakeMetric(request):
    body_uni = request.body.decode('utf-8')
    body = json.loads(body_uni)
    if (not ( body["id"] or body["metric_name"])):
        raise BadRequest('Invalid request.')        
    id = body["id"]
    metric_name = body["metric_name"]
    output = handleRequest(id, metric_name)
    return Response(output)


def handleRequest(id, metric_name):
    return {"result": f"Przyjalem metryke o id {id} i metric_name {metric_name}"}
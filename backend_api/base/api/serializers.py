from rest_framework.serializers import ModelSerializer
from base.models import BaseTest, DupaSqlite3

class BaseTestSerializer(ModelSerializer):
    class Meta:
        model = BaseTest
        fields = '__all__'


class DupaSlite3Serializer(ModelSerializer):
    class Meta:
        model = DupaSqlite3
        fields = '__all__'
from .models import Calc
from rest_framework import serializers

class CalcSerializer(serializers.ModelSerializer):
    class Meta:
        model=Calc
        fields='__all__'
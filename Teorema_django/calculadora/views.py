from django.shortcuts import render
from .models import Calc
from rest_framework import viewsets, permissions, generics
from .serializers import CalcSerializer
from rest_framework.response import Response
from rest_framework import status


# Create your views here. Criacao de Views atravez das request data

class CalcViewset(viewsets.ModelViewSet):
    serializer_class=CalcSerializer
    queryset=Calc.objects.all()
    
def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
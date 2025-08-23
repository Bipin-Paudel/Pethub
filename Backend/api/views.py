from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import User
from .serializers import RegisterSerializer
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
def home(request):
  return HttpResponse('i like it')

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        print("Incoming data:", request.data)  # <-- Debug here
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "User created successfully"}, status=status.HTTP_201_CREATED)
        print("Errors:", serializer.errors)  # <-- See why it failed
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




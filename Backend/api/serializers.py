from rest_framework import serializers
from .models import User

class RegisterSerializer(serializers.ModelSerializer):
    # Map frontend "name" to backend "full_name"
    name = serializers.CharField(source='full_name')

    class Meta:
        model = User
        fields = ['name', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        # Create user using create_user method
        user = User.objects.create_user(
            email=validated_data['email'],
            full_name=validated_data['full_name'],
            password=validated_data['password']
        )
        return user

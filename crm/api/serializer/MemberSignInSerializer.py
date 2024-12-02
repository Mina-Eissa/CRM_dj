from rest_framework import serializers
from ..models import Member
from django.contrib.auth.hashers import make_password, check_password


class MemberSignInSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        try:
            member = Member.objects.get(email=email)
        except Member.DoesNotExist:
            raise serializers.ValidationError("Invalid email or password")

        # Verify the password
        if not check_password(password, member.password):
            raise serializers.ValidationError("Invalid email or password")

        return member

from rest_framework import serializers
from ..models import Member
from django.contrib.auth.hashers import make_password, check_password


class MemberSignUpSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ['name', 'email', 'phone_number',
                  'Gender', 'bio', 'birth_date', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        # Hash the password before saving
        validated_data['password'] = make_password(validated_data['password'])
        return super().create(validated_data)

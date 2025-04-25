from rest_framework import serializers
from ..models import Member


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields =  ['name', 'email', 'Age', 'phone_number', 'Gender', 'bio', 'birth_date']
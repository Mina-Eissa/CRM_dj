from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..serializers import MemberSerializer
from ..models import Member

class HomeMemberDisplayView(APIView):
     def get(self, request):
        members = Member.objects.all()  # Retrieve all members
        serializer = MemberSerializer(members, many=True)  # Serialize the members
        return Response(serializer.data, status=status.HTTP_200_OK)  # Return the serialized data as JSON
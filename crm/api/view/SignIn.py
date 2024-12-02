from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..serializers import MemberSignUpSerializer, MemberSignInSerializer
from ..models import Member


class SignInView(APIView):
    def post(self, request):
        serializer = MemberSignInSerializer(data=request.data)
        if serializer.is_valid():
            member = serializer.validated_data
            return Response({"message": f"Welcome {member.name}!"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

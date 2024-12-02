from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..serializers import MemberSignUpSerializer, MemberSignInSerializer
from ..models import Member

class SignUpView(APIView):
    def post(self, request):
        serializer = MemberSignUpSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Member registered successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
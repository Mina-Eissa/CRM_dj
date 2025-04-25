from django.urls import path
from .views import SignUp, SignIn, HomeMemberDisplay

urlpatterns = [
    path('signup/', SignUp, name='signup'),
    path('signin/', SignIn, name='signin'),
    path('membersdisplay/', HomeMemberDisplay, name='home-members-display')
]

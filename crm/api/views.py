from .view.SignUp import SignUpView
from .view.SignIn import SignInView
from .view.HomeMemberDisplay import HomeMemberDisplayView

SignUp = SignUpView.as_view()
SignIn = SignInView.as_view()
HomeMemberDisplay = HomeMemberDisplayView.as_view()

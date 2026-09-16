from django.urls import path
# from accounts.views import UserView
from accounts.views import RegisterView, ProtectedView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path("register/", RegisterView.as_view()),
    path("token/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("protected-view/", ProtectedView.as_view()),
]
# eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzg5NDkwMzczLCJpYXQiOjE3ODk0ODk0NzMsImp0aSI6ImZjOGU2MjdkYWI5MDQyOGVhMDZlZTNkOTA4YWUzNWVkIiwidXNlcl9pZCI6IjIifQ.rXc-MmjSEZT8XGuh_3DDHI9_w8IHfiAEXx-Ja4-PON8

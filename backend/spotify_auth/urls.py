from django.urls import path
from .views import AccessCode

urlpatterns = [
    path('access_code',  AccessCode.as_view()),
]

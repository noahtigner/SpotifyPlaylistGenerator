from django.db.models import Model, CharField, PositiveSmallIntegerField, DateTimeField
from django.conf import settings

class SpotifyTokenModel(Model):
    user_id = CharField(max_length=64, primary_key=True)
    access_token = CharField(max_length=256)
    refresh_token = CharField(max_length=256)
    # scope = 
    expires_in = PositiveSmallIntegerField()
    created_at = DateTimeField(auto_now_add=True)

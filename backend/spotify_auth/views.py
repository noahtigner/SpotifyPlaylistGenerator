import requests
from requests.auth import HTTPBasicAuth
from time import sleep
from logging import getLogger

from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer
from django.conf import settings

from .authorization import SpotifyAuth

logger = getLogger('spotify_auth.views')


class AccessCode(APIView):
    def post(self, request, *args, **kwargs):
        if 'code' not in request.data:
            logger.error('NO CODE PROVIDED')
            return Response(
                'NO CODE PROVIDED', 
                status=400
            )


        access_code = request.data['code']
        # logger.info(f'CODE: {access_code}')

        try:
            # token = generate_token(access_code)
            # user_profile = get_user_profile(token)
            id_and_token = SpotifyAuth.create_or_update_token(access_code)

        except Exception as e:
            logger.exception(e)
            return Response(
                f"Error: {e}", 
                status=500
            )

        return Response(
            id_and_token, 
            status=200
        )

    

import requests
from requests.auth import HTTPBasicAuth
from time import sleep
from logging import getLogger

from django.conf import settings

from .models import SpotifyTokenModel

logger = getLogger('spotify_auth.authorization')

class SpotifyAuth:

    @staticmethod
    def generate_token(code):
        if not code:
            raise ValueError('no code bro')

        body = {
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': settings.SPOTIFY_CLIENT_REDIRECT_URI
        }

        r = requests.post(
            'https://accounts.spotify.com/api/token', 
            data=body, 
            auth=HTTPBasicAuth(settings.SPOTIFY_CLIENT_ID, settings.SPOTIFY_CLIENT_SECRET)
        )

        if r.status_code != 200:
            raise Exception(f'received {r.status_code}')

        response_data = r.json()
        logger.info(response_data)
        return response_data

    @staticmethod
    def create_or_update_token(code):
        """
        1. get token w/ code
        2. get user id w/ token
        3. save token & user id
        4. return user id
        """

        # generate a token
        token_data = SpotifyAuth.generate_token(code)

        # get the current user's id
        user_id = SpotifyAuth.get_user_id(token_data['access_token'])

        # save
        try:
            obj, created = SpotifyTokenModel.objects.update_or_create(
                user_id=user_id,
                defaults={
                    'user_id': user_id,
                    'access_token': token_data['access_token'],
                    'refresh_token': token_data['refresh_token'],
                    'expires_in': token_data['expires_in'],
                },
            )
            
        except Exception as e:
            logger.error(e)
            raise

        return {
            'user_id': user_id,
            'token': token_data['access_token']
        }

    @staticmethod
    def get_user_id(token):
        # if 'access_token' not in token:
        #     raise ValueError('get_user_id: No Token')
        
        auth_header = f"Bearer {token}"

        r = requests.get(
            'https://api.spotify.com/v1/me', 
            headers={
                'Authorization': auth_header
            }
        )

        if r.status_code != 200:
            raise Exception(f'received {r.status_code}')

        return r.json()['id']

# def get_user_profile(token):
#     if 'access_token' not in token:
#         raise ValueError('No Token')
    
#     auth_header = f"Bearer {token['access_token']}"

#     r = requests.get(
#         'https://api.spotify.com/v1/me', 
#         headers={
#             'Authorization': auth_header
#         }
#     )

#     if r.status_code != 200:
#         raise Exception(f'received {r.status_code}')

#     return r.json()
    
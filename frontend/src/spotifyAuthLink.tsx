import React from 'react';


const SpotifyAuthLink = () => {
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
	const CLIENT_ID = '12073d0b13714c47908d90ca2c88ad7d';
	const REDIRECT_URI = 'http://localhost:3000/';
	const SCOPES = 'user-read-private user-read-email';
	const RESPONSE_TYPE = 'code';

	const get_token_uri = () => {
		return `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`
    }
    
    return (
        <a style={{border: '1px solid white', borderRadius: 4}} href={get_token_uri()}>Login to Spotify</a>
    )
}

export default SpotifyAuthLink;

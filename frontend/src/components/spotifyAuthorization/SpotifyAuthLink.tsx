import React from 'react';
import { Link } from '@mui/material';

// import settings from "settings.json";


const SpotifyAuthLink = () => {
    const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
	const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
	const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
	const SCOPES = 'user-read-private user-read-email';
	const RESPONSE_TYPE = 'code';

	const get_token_uri = () => {
		return `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}`
    }
    
    return (
		// <Link href={get_token_uri()} target="_blank" rel="noopener">Login to Spotify</Link>
		<Link href={get_token_uri()}>Login to Spotify</Link>
    )
}

export default SpotifyAuthLink;
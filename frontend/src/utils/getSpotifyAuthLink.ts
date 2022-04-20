const AUTH_ENDPOINT = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI;
const SCOPES = 'user-read-private user-read-email';
const RESPONSE_TYPE = 'code';

const getSpotifyAuthLink = () => {
    const path = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}`;
    console.log(path);
    return path;
}

export default getSpotifyAuthLink;

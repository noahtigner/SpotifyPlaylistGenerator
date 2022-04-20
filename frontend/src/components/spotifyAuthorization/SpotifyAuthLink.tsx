import React from 'react';
// import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

import getSpotifyAuthLink from 'utils/getSpotifyAuthLink';


// import settings from "settings.json";


const SpotifyAuthLink = () => {
    
    
    return (
		// <Link href={get_token_uri()} target="_blank" rel="noopener">Login to Spotify</Link>
		// <Link component={RouterLink} to={get_token_uri()}>Login to Spotify</Link>
		<Link href={getSpotifyAuthLink()}>Login to Spotify</Link>
    )
}

export default SpotifyAuthLink;

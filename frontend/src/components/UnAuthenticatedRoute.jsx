import React, {useEffect, useState} from 'react';
import { useNavigate, useSearchParams, createSearchParams } from 'react-router-dom';

import SpotifyAuthLink from 'components/spotifyAuthorization/SpotifyAuthLink';
import Card from 'components/_layout/Card';
import axios from 'utils/axiosConfig.jsx';

const UnAuthenticatedRoute = (props) => {
    // const navigate = useNavigate();

    // useEffect(() => {

    // }, []);

    
    
    return (
        <Card content={
            <>
                You must log in with your Spotify account and grant access to this app
                <br />
                <SpotifyAuthLink />
            </>
        } />
    )
}

export default UnAuthenticatedRoute;

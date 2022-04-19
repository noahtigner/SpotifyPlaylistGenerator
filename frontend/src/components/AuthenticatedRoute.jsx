import React, {useEffect, useState} from 'react';
import { useNavigate, useSearchParams, createSearchParams } from 'react-router-dom';

import axios from 'utils/axiosConfig.jsx';

const AuthenticatedRoute = (props) => {
    const navigate = useNavigate();

    useEffect(() => {

    }, []);

    if(window.localStorage.getItem('userData') === null) {
        navigate('/', { replace: true });
    }
    
    return (<>{props.content}</>)
}

export default AuthenticatedRoute;

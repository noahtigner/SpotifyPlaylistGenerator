import React, {useEffect, useState} from 'react';
import { useNavigate, useSearchParams, createSearchParams } from 'react-router-dom';

import axios from 'utils/axiosConfig.jsx';

const Dashboard = (props) => {
    // const navigate = useNavigate();
    const [search, setSearch] = useSearchParams();

    useEffect(() => {
        // setSearch({});
        window.location.search = '';
    }, []);
    
    return (<div>authd</div>)
}

export default Dashboard;

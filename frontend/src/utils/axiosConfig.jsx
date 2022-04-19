import axios from 'axios';

import settings from "../settings.json";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_URL_BASE,
    timeout: settings.requests.timeout * 1000
});

export default axiosInstance;

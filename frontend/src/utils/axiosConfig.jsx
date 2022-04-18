import axios from 'axios';

import settings from "../settings.json";

const axiosInstance = axios.create({
    baseURL: settings.URL_BASE,
    timeout: settings.requests.timeout * 1000
});

export default axiosInstance;

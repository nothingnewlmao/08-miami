import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://ya-praktikum.tech/api/v2/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;

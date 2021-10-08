import axios from 'axios';
import TObjectLiteral from 'types/TObjectLiteral';

const axiosInstance = axios.create({
    baseURL: 'https://ya-praktikum.tech/api/v2/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const signUp = (data: TObjectLiteral) => axiosInstance.post('auth/signup', JSON.stringify(data));

export const signIn = (data: TObjectLiteral) => axiosInstance.post('auth/signin', JSON.stringify(data));

import axios from 'axios';
import TObjectLiteral from 'types/TObjectLiteral';

enum AuthUrls {
    SignUp = 'auth/signup',
    SignIn = 'auth/signin',
    LogOut = 'auth/logout',
}

const axiosInstance = axios.create({
    baseURL: 'https://ya-praktikum.tech/api/v2/',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const signUp = (data: TObjectLiteral) => axiosInstance.post(AuthUrls.SignUp, JSON.stringify(data));

export const signIn = (data: TObjectLiteral) => axiosInstance.post(AuthUrls.SignIn, JSON.stringify(data));

export const logOut = () => axiosInstance.post(AuthUrls.LogOut);

import TObjectLiteral from 'types/TObjectLiteral';
import axiosInstance from 'api/axios';

enum AuthUrls {
    SignUp = 'auth/signup',
    SignIn = 'auth/signin',
    LogOut = 'auth/logout',
    GetUser = 'auth/user',
}

export const signUp = (data: TObjectLiteral) =>
    axiosInstance.post(AuthUrls.SignUp, JSON.stringify(data));

export const signIn = (data: TObjectLiteral) =>
    axiosInstance.post(AuthUrls.SignIn, JSON.stringify(data));

export const logOut = () => axiosInstance.post(AuthUrls.LogOut);

export const getCurrentUser = () => axiosInstance.get(AuthUrls.GetUser);

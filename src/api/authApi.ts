import TObjectLiteral from 'types/TObjectLiteral';
import axiosInstance from 'api/axios';

enum AuthUrls {
    SignUp = 'auth/signup',
    SignIn = 'auth/signin',
    LogOut = 'auth/logout',
}

export default class AuthApi {
    static signUp = (data: TObjectLiteral) => axiosInstance.post(AuthUrls.SignUp, JSON.stringify(data));

    static signIn = (data: TObjectLiteral) => axiosInstance.post(AuthUrls.SignIn, JSON.stringify(data));

    static logOut = () => axiosInstance.post(AuthUrls.LogOut);
}

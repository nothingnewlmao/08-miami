import TObjectLiteral from 'types/TObjectLiteral';
import axiosInstance from 'api/axios';

enum AuthUrls {
    SignUp = 'auth/signup',
    SignIn = 'auth/signin',
    LogOut = 'auth/logout',
}

const AuthApi = {
    signUp: (data: TObjectLiteral) => axiosInstance.post(AuthUrls.SignUp, JSON.stringify(data)),
    signIn: (data: TObjectLiteral) => axiosInstance.post(AuthUrls.SignIn, JSON.stringify(data)),
    logOut: () => axiosInstance.post(AuthUrls.LogOut),
};

export default AuthApi;

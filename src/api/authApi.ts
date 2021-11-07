import TObjectLiteral from 'types/TObjectLiteral';
import axiosInstance from 'api/axios';

enum AuthUrls {
    SignUp = 'auth/signup',
    SignIn = 'auth/signin',
    LogOut = 'auth/logout',
    GetUser = 'auth/user',
}

class AuthApi {
    signUp = (data: TObjectLiteral) => axiosInstance.post(AuthUrls.SignUp, JSON.stringify(data));

    signIn = (data: TObjectLiteral) => axiosInstance.post(AuthUrls.SignIn, JSON.stringify(data));

    logOut = () => axiosInstance.post(AuthUrls.LogOut);

    getCurrentUser = () => axiosInstance.get(AuthUrls.GetUser);
}

const authApi = new AuthApi();

export default authApi;

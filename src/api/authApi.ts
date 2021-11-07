import TObjectLiteral from 'types/TObjectLiteral';
import axiosInstance from 'api/axios';

enum AuthUrls {
    SignUp = 'auth/signup',
    SignIn = 'auth/signin',
    LogOut = 'auth/logout',
    GetUser = 'auth/user',
    OauthSignIn = 'oauth/yandex',
    GetOauthServiceId = 'oauth/yandex/service-id',
}

class AuthApi {
    signUp = (data: TObjectLiteral) =>
        axiosInstance.post(AuthUrls.SignUp, JSON.stringify(data));

    signIn = (data: TObjectLiteral) =>
        axiosInstance.post(AuthUrls.SignIn, JSON.stringify(data));

    logOut = () => axiosInstance.post(AuthUrls.LogOut);

    getCurrentUser = () => axiosInstance.get(AuthUrls.GetUser);

    getOAuthServiceId = () =>
        axiosInstance.get(AuthUrls.GetOauthServiceId, {
            params: {
                redirect_uri: process.env.REDIRECT_URI,
            },
        });

    // @ts-ignore : почему-то считает, что process.env.OAUTH_URL — undefined
    authorizeApp = (client_id: string) =>
        axiosInstance.get(process.env.OAUTH_URL, {
            params: {
                response_type: 'code',
                redirect_uri: process.env.REDIRECT_URI,
                client_id,
            },
        });

    oAuthSignIn = (client_id: string) =>
        axiosInstance.post(AuthUrls.OauthSignIn, {
            client_id,
            redirect_uri: process.env.REDIRECT_URI,
        });
}

const authApi = new AuthApi();

export default authApi;

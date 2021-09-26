import { TSignUp } from 'api/Auth/types';
import BaseApi from 'api/BaseApi';

export default class AuthApi {
    public signup(user: TSignUp) {
        const body = user instanceof FormData ? user : JSON.stringify(user);

        return BaseApi.post('auth/signup', body)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
            });
    }
}

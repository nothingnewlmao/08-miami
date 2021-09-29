import BaseApi from 'api/BaseApi';
import TObjectLiteral from 'types/ObjectLiteral';

const AuthApi = {
    signup: (user: TObjectLiteral) => {
        const body = JSON.stringify(user);

        return BaseApi.post('auth/signup', body)
            .then(res => res.json())
            .then(res => {
                const { error, reason, id } = res;

                if (typeof id === 'undefined') {
                    throw new Error(`${error}: ${reason}`);
                }

                return id;
            });
    },
};

export default AuthApi;

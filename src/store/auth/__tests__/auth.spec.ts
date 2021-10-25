import 'jsdom-global/register';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';
import { throwError } from 'redux-saga-test-plan/providers';
import AuthApi from 'api/authApi';

import { signInRequest } from 'store/auth/sagas';
import { logInFailed, logInLoaded } from 'store/auth/slice';

class XHRError extends Error {
    response;

    constructor(text: string) {
        super();
        this.response = {
            data: {
                reason: text,
            },
        };
    }
}

describe('Auth Sagas', () => {
    describe('Sign In saga', () => {
        it('should be on root path if success', () => {
            const fakeResponse = 'ok';

            return expectSaga(signInRequest, AuthApi)
                .provide([[matchers.call.fn(AuthApi.signIn), fakeResponse]])
                .put(logInLoaded())
                .run();
        });

        it('handles errors from BE', () => {
            const errorText = 'bad response';
            const error = new XHRError(errorText);

            return expectSaga(signInRequest, AuthApi)
                .provide([
                    [matchers.call.fn(AuthApi.signIn), throwError(error)],
                ])
                .put(logInFailed(errorText))
                .run();
        });
    });
});

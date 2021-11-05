import { call, put, takeEvery } from 'redux-saga/effects';
import AuthApi from 'api/authApi';
import TObjectLiteral from 'types/TObjectLiteral';

import {
    logInFetching,
    logInFailed,
    logInLoaded,
    signupFetching,
    signUpLoaded,
    signUpFailed,
    logOutFetching,
    logOutLoaded,
    logOutFailed,
    setOAuthServiceId,
} from 'store/auth/slice';
import ActionTypes from 'store/auth/actionTypes';
import { setUserData } from 'store/userProfile/slice';

import history from 'utils/history';
import { mapApiUserToIUser } from 'utils/mapApiUserToUser';

function* signInRequest(action: any) {
    yield put(logInFetching());
    const { payload } = action;

    try {
        yield call(AuthApi.signIn, payload);

        yield put(logInLoaded());
        yield call([history, history.push], '/');
    } catch (e: any) {
        const { reason = null } = e.response.data;
        yield put(logInFailed(reason));
    }
}

export function* signInSaga() {
    yield takeEvery(ActionTypes.SignIn, signInRequest);
}

function* signUpRequest(action: any) {
    yield put(signupFetching());
    const { payload } = action;

    try {
        yield call(AuthApi.signUp, payload);

        yield put(signUpLoaded());
        yield call([history, history.push], '/');
    } catch (e: any) {
        const { reason = null } = e.response.data;
        yield put(signUpFailed(reason));
    }
}

export function* signUpSaga() {
    yield takeEvery(ActionTypes.SignUp, signUpRequest);
}

function* logOutRequest() {
    yield put(logOutFetching());

    try {
        yield call(AuthApi.logOut);

        yield put(logOutLoaded());
    } catch (e: any) {
        const { reason = null } = e.response.data;

        yield put(logOutFailed(reason));
    } finally {
        yield call([history, history.push], '/sign-in');
    }
}

export function* logOutSaga() {
    yield takeEvery(ActionTypes.LogOut, logOutRequest);
}

function* currentUserRequest() {
    try {
        const response: TObjectLiteral = yield call(AuthApi.getCurrentUser);

        yield put(setUserData(mapApiUserToIUser(response.data)));
    } catch (e: any) {
        const { reason = null } = e.response.data;
        console.log('reason :>> ', reason);
    }
}

export function* currentUserSaga() {
    yield takeEvery(ActionTypes.GetUser, currentUserRequest);
}

function* oAuthSignInRequest() {
    try {
        yield put(logInFetching());

        const serviceIdRes: TObjectLiteral = yield call(
            AuthApi.getOAuthServiceId,
        );

        const { service_id: serviceId } = serviceIdRes.data;

        yield put(setOAuthServiceId(serviceId));

        yield call([
            window,
            () => {
                // eslint-disable-next-line max-len
                window.location.href = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${serviceId}&redirect_uri=${process.env.REDIRECT_URI}`;
            },
        ]);
    } catch (e: any) {
        const { reason = null } = e.response.data;
        yield put(logInFailed(reason));
    }
}

export function* oAuthSignInSaga() {
    yield takeEvery(ActionTypes.OauthSignIn, oAuthSignInRequest);
}

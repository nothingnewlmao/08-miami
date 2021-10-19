import { call, put, takeEvery } from 'redux-saga/effects';
import { logOut, signIn, signUp } from 'api/authApi';

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
} from 'store/auth/slice';
import ActionTypes from 'store/auth/actionTypes';

import history from 'utils/history';

function* signInRequest(action: any) {
    yield put(logInFetching());
    const { payload } = action;

    try {
        yield call(signIn, payload);

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
        yield call(signUp, payload);

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
        yield call(logOut);

        yield put(logOutLoaded());
        yield call([history, history.push], '/sign-in');
    } catch (e: any) {
        const { reason = null } = e.response.data;
        yield put(logOutFailed(reason));
    }
}

export function* logOutSaga() {
    yield takeEvery(ActionTypes.LogOut, logOutRequest);
}

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
} from 'store/auth/slice';
import ActionTypes from 'store/auth/actionTypes';
import {
    dataFetching,
    setUserData,
    dataFailed,
    resetUserData,
} from 'store/userProfile/slice';

import history from 'utils/history';
import { mapApiUserToIUser } from 'utils/mapApiUserToUser';

function* logOutRequest() {
    yield put(logOutFetching());

    try {
        yield call(AuthApi.logOut);

        yield put(logOutLoaded());
        yield put(resetUserData());
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
    yield put(dataFetching());

    try {
        const response: TObjectLiteral = yield call(AuthApi.getCurrentUser);

        yield put(setUserData(mapApiUserToIUser(response.data)));
    } catch (e: any) {
        const { reason = null } = e.response.data;

        yield put(dataFailed(reason));
    }
}

export function* currentUserSaga() {
    yield takeEvery(ActionTypes.GetUser, currentUserRequest);
}

function* signUpRequest(action: any) {
    yield put(signupFetching());
    const { payload } = action;

    try {
        yield call(AuthApi.signUp, payload);

        yield put(signUpLoaded());

        yield call(currentUserRequest);

        yield call([history, history.push], '/');
    } catch (e: any) {
        const { reason = null } = e.response.data;
        yield put(signUpFailed(reason));
    }
}

export function* signUpSaga() {
    yield takeEvery(ActionTypes.SignUp, signUpRequest);
}

export function* signInRequest(action: any) {
    yield put(logInFetching());
    const { payload } = action;

    try {
        yield call(AuthApi.signIn, payload);

        yield put(logInLoaded());

        yield call(currentUserRequest);

        yield call([history, history.push], '/');
    } catch (e: any) {
        const { reason = null } = e.response.data;
        yield put(logInFailed(reason));
    }
}

export function* signInSaga() {
    yield takeEvery(ActionTypes.SignIn, signInRequest);
}

import { call, put, takeEvery } from 'redux-saga/effects';
import { getCurrentUser, logOut, signIn, signUp } from 'api/authApi';
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
import { setUserData } from 'store/userProfile/slice';

import history from 'utils/history';
import { mapApiUserToIUser } from 'utils/mapApiUserToUser';

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

function* CurrentUserRequest() {
    try {
        const response: TObjectLiteral = yield call(getCurrentUser);

        yield put(setUserData(mapApiUserToIUser(response.data)));
    } catch (e: any) {
        const { reason = null } = e.response.data;
        console.log('reason :>> ', reason);
    }
}

export function* CurrentUserSaga() {
    yield takeEvery(ActionTypes.GetUser, CurrentUserRequest);
}

import { call, put, takeEvery } from 'redux-saga/effects';
import { signIn } from 'api/axios';

import { logInFetching, logInFailed, logInLoaded } from 'store/auth/slice';

function* signInRequest(action: any) {
    yield put(logInFetching());
    const { payload } = action;

    try {
        yield call(signIn, payload);

        yield put(logInLoaded());
    } catch (e: any) {
        const { reason = null } = e.response.data;
        yield put(logInFailed(reason));
    }
}

function* signInSaga() {
    yield takeEvery('signIn', signInRequest);
}

export default signInSaga;

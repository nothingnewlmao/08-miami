import { call, put, takeEvery } from 'redux-saga/effects';
import { signIn } from 'api/authApi';

import { logInFetching, logInFailed, logInLoaded } from 'store/auth/slice';

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

function* signInSaga() {
    yield takeEvery('signIn', signInRequest);
}

export default signInSaga;

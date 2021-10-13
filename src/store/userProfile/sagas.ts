import { call, put, takeEvery } from 'redux-saga/effects';
import { signIn } from 'api/axios';

import {
    resetError,
    resetFailed,
    resetPending,
    resetSuccess,
    setError,
    setFailed,
    setPending,
    setSuccess,
} from 'store/userProfile/slice';

function* signInRequest(action: any) {
    yield put(resetSuccess());
    yield put(resetFailed());
    yield put(resetError());

    const { payload } = action;
    yield put(setPending());

    try {
        yield call(signIn, payload);
        yield put(setSuccess());
    } catch (e: any) {
        yield put(setFailed());
        const { reason } = e.response.data;
        yield put(setError(reason));
    }
    yield put(resetPending());
}

function* signInSaga() {
    yield takeEvery('SIGN_IN', signInRequest);
}

export default signInSaga;

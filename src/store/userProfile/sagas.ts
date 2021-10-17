import { call, put, takeEvery } from 'redux-saga/effects';
import { signIn } from 'api/authApi';

import { dataFailed, dataFetching, dataLoaded } from 'store/userProfile/slice';

function* signInRequest(action: any) {
    yield put(dataFetching());
    const { payload } = action;

    try {
        yield call(signIn, payload);

        const { login } = payload;
        yield put(dataLoaded({ login }));
    } catch (e: any) {
        const { reason } = e.response.data;
        yield put(dataFailed(reason));
    }
}

function* signInSaga() {
    yield takeEvery('signIn', signInRequest);
}

export default signInSaga;

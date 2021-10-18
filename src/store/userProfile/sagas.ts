import { call, put, takeEvery } from 'redux-saga/effects';
import { signIn } from 'api/authApi';

import { dataFailed, dataFetching, dataLoaded } from 'store/userProfile/slice';
import ActionTypes from 'store/userProfile/actionTypes';

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
    yield takeEvery(ActionTypes.SignIn, signInRequest);
}

export default signInSaga;

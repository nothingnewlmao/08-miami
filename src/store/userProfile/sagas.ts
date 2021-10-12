import { put, takeEvery } from 'redux-saga/effects';
import { signIn } from 'api/axios';

import { resetPending, setPending } from 'store/userProfile/slice';

function* signInRequest(action: any) {
    yield put(setPending);
    yield signIn(action.payload)
        .then(() => {
            console.log('success');
        })
        .catch((e) => {
            console.log(e);
        })
        .finally(() => put(resetPending));
}

function* signInSaga() {
    yield takeEvery('SIGN_IN', signInRequest);
}

export default signInSaga;

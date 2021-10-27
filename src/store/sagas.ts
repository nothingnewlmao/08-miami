import { all } from 'redux-saga/effects';

import { signInSaga, signUpSaga, logOutSaga } from 'store/auth/sagas';

export default function* rootSaga() {
    yield all([signInSaga(), signUpSaga(), logOutSaga()]);
}

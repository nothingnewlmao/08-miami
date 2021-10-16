import { all } from 'redux-saga/effects';

import signInSaga from 'store/auth/sagas';

export default function* rootSaga() {
    yield all([signInSaga()]);
}

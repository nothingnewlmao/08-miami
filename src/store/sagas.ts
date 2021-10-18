import { all } from 'redux-saga/effects';

import signInSaga from 'store/userProfile/sagas';

export default function* rootSaga() {
    yield all([signInSaga()]);
}

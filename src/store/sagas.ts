import { all } from 'redux-saga/effects';

import {
    signInSaga,
    signUpSaga,
    logOutSaga,
    CurrentUserSaga,
} from 'store/auth/sagas';
import { changeInfoSaga, changePasswordSaga } from 'store/userProfile/sagas';

export default function* rootSaga() {
    yield all([
        signInSaga(),
        signUpSaga(),
        logOutSaga(),
        changeInfoSaga(),
        changePasswordSaga(),
        CurrentUserSaga(),
    ]);
}

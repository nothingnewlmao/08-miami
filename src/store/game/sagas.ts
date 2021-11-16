import { put, takeEvery } from 'redux-saga/effects';

import ActionTypes from 'store/game/actionTypes';

import { setGameProps } from './slice';

function* requestUpdateGameProps({ payload }: any) {
    yield put(setGameProps({ ...payload }));

    // yield call([history, history.push], '/game');
}
export function* updateGameProps() {
    yield takeEvery(ActionTypes.UpdateGameProps, requestUpdateGameProps);
}

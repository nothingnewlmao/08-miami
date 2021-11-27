import { RouterState } from 'connected-react-router';
import TAuthStatus from 'types/TAuthStatus';
import TUserProfile from 'types/TUserProfile';
import { Store } from 'redux';
import { SagaMiddleware } from '@redux-saga/core';
import { store } from 'client';

import { TGameState } from './game/slice';

export interface IState {
    router: RouterState;
    auth: TAuthStatus;
    user: TUserProfile;
    game: TGameState;
}

export type TAppStore = Store & {
    runSaga: SagaMiddleware['run'];
    close: () => void;
};

export type TRootState = ReturnType<typeof store.getState>;

export type TStoreDispatch = typeof store.dispatch;

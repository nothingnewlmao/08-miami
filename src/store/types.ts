import { RouterState } from 'connected-react-router';
import TAuthStatus from 'types/TAuthStatus';
import TUserProfile from 'types/TUserProfile';
import { Store } from 'redux';
import { SagaMiddleware } from '@redux-saga/core';
import TLeaderBoard from 'types/TLeaderBoard';

export interface IState {
    router: RouterState;
    auth: TAuthStatus;
    user: TUserProfile;
    leaderboard: TLeaderBoard;
}

export type TAppStore = Store & {
    runSaga: SagaMiddleware['run'];
    close: () => void;
};

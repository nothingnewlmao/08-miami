import { RouterState } from 'connected-react-router';

import { IState } from './types';
import { initialState as authInitialState } from './auth/slice';
import { initialState as userProfileInitialState } from './userProfile/slice';

export const getInitialState = (pathname: string = '/'): IState => ({
    auth: authInitialState,
    user: userProfileInitialState,
    router: {
        location: {
            pathname,
            search: '',
            hash: '',
            key: '',
        },
        action: 'POP',
    } as RouterState,
});

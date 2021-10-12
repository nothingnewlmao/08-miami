import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userProfile/slice';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

export type TRootState = ReturnType<typeof store.getState>;

export type TStoreDispatch = typeof store.dispatch;

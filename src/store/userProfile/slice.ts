/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import TNullable from 'types/Nullable';
import TObjectLiteral from 'types/TObjectLiteral';

type TUserProfile = {
    data: TNullable<TObjectLiteral>;
    pending: boolean;
    error: TNullable<string>;
};

const initialState: TUserProfile = {
    data: {
        first_name: '',
        second_name: '',
        login: '',
        email: '',
        phone: '',
    },
    pending: false,
    error: null,
};

const userSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        dataFetching(state) {
            state.data = null;
            state.pending = true;
            state.error = null;
        },
        dataLoaded(state, action) {
            state.pending = false;
            state.error = null;
            state.data = action.payload;
        },
        dataFailed(state, action) {
            state.pending = false;
            state.data = null;
            state.error = action.payload;
        },
    },
});

export const { dataFetching, dataLoaded, dataFailed } = userSlice.actions;

export default userSlice.reducer;

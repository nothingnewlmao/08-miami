/* eslint-disable no-param-reassign */
import { TNullable } from 'types/Nullable';
import { createSlice } from '@reduxjs/toolkit';

type TUserProfile = {
    data: {
        login: TNullable<string>;
        first_name: TNullable<string>;
        second_name: TNullable<string>;
        email: TNullable<string>;
        phone: TNullable<string>;
    };
    pending: boolean;
    loaded: boolean;
    failed: boolean;
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
    failed: false,
    loaded: false,
};

const userSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        setPending(state) {
            state.pending = true;
        },
        resetPending(state) {
            state.pending = false;
        },
    },
});

export const { setPending, resetPending } = userSlice.actions;

export default userSlice.reducer;

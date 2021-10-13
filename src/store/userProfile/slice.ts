/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import TNullable from 'types/Nullable';
import TObjectLiteral from 'types/TObjectLiteral';

type TUserProfile = {
    data: {
        login: TNullable<string>;
        first_name: TNullable<string>;
        second_name: TNullable<string>;
        email: TNullable<string>;
        phone: TNullable<string>;
    };
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
    loaded: false,
    failed: false,
    error: null,
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
        setSuccess(state) {
            state.loaded = true;
        },
        resetSuccess(state) {
            state.loaded = false;
        },
        setFailed(state) {
            state.failed = true;
        },
        resetFailed(state) {
            state.failed = false;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        resetError(state) {
            state.error = null;
        },
    },
});

export const {
    setPending,
    resetPending,
    setSuccess,
    resetSuccess,
    setFailed,
    resetFailed,
    setError,
    resetError,
} = userSlice.actions;

export default userSlice.reducer;

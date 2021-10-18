/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import TAuthStatus from 'types/auth/TAuthStatus';

const initialState: TAuthStatus = {
    isLoggedIn: false,
    pending: false,
    error: null,
};

const authStore = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logInFetching(state) {
            state.pending = true;
            state.error = null;
        },
        logInLoaded(state) {
            state.pending = false;
            state.isLoggedIn = true;
            state.error = null;
        },
        logInFailed(state, action) {
            state.isLoggedIn = false;
            state.pending = false;

            const { payload = null } = action;

            state.error = payload;
        },
        logOutFetching(state) {
            state.pending = true;
            state.error = null;
        },
        logOutLoaded(state) {
            state.pending = false;
            state.isLoggedIn = false;
            state.error = null;
        },
        logOutFailed(state, action) {
            state.pending = false;
            state.error = action.payload;
        },
        signupFetching(state) {
            state.pending = true;
            state.error = null;
        },
        signUpLoaded(state) {
            state.pending = false;
            state.isLoggedIn = true;
            state.error = null;
        },
        signUpFailed(state, action) {
            state.pending = false;
            state.error = action.payload;
        },
    },
});

export const {
    logInFetching,
    logInLoaded,
    logInFailed,
    logOutFetching,
    logOutLoaded,
    logOutFailed,
    signupFetching,
    signUpLoaded,
    signUpFailed,
} = authStore.actions;

export default authStore.reducer;

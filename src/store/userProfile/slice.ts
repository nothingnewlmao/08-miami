/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import TUserProfile from 'types/TUserProfile';

const initialState: TUserProfile = {
    userInfo: null,
    pending: false,
    error: null,
    loaded: false,
};

const userSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        dataFetching(state) {
            state.pending = true;
            state.error = null;
            state.loaded = false;
        },
        dataFailed(state, action) {
            state.pending = false;
            state.error = action.payload;
            state.loaded = false;
        },
        setUserData(state, action) {
            state.pending = false;
            state.error = null;
            state.loaded = true;
            state.userInfo = action.payload;
        },
        resetUserData(state) {
            state.pending = false;
            state.error = null;
            state.loaded = false;
            state.userInfo = null;
        },
    },
});

export const {
    dataFetching, setUserData, dataFailed, resetUserData,
} = userSlice.actions;

export default userSlice.reducer;

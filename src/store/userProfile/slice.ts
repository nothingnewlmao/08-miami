/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import TUserProfile from 'types/userProfile/TUserProfile';

const initialState: TUserProfile = {
    userInfo: null,
    pending: false,
    error: null,
};

const userSlice = createSlice({
    name: 'userProfile',
    initialState,
    reducers: {
        dataFetching(state) {
            state.pending = true;
            state.error = null;
        },
        dataFailed(state, action) {
            state.pending = false;
            state.error = action.payload;
        },
        setUserData(state, action) {
            state.pending = false;
            state.error = null;
            state.userInfo = action.payload;
        },
    },
});

export const { dataFetching, setUserData, dataFailed } = userSlice.actions;

export default userSlice.reducer;

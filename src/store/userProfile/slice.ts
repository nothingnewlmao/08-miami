/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import TUserProfile from 'types/userProfile/TUserProfile';

const initialState: TUserProfile = {
    data: null,
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

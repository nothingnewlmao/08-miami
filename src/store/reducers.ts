import { combineReducers } from '@reduxjs/toolkit';

import userReducer from 'store/userProfile/slice';

export default combineReducers({
    user: userReducer,
});

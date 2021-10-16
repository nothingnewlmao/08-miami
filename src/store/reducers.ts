import { combineReducers } from '@reduxjs/toolkit';

import userReducer from 'store/userProfile/slice';
import authReducer from 'store/auth/slice';

export default combineReducers({
    user: userReducer,
    auth: authReducer,
});

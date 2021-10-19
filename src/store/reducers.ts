import { combineReducers } from '@reduxjs/toolkit';
import { connectRouter } from 'connected-react-router';

import userReducer from 'store/userProfile/slice';
import authReducer from 'store/auth/slice';

import history from 'utils/history';

export default combineReducers({
    router: connectRouter(history),
    user: userReducer,
    auth: authReducer,
});

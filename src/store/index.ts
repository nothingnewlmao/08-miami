import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducers from 'store/reducers';
import rootSaga from 'store/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware).concat(logger),
});

sagaMiddleware.run(rootSaga);

export type TRootState = ReturnType<typeof store.getState>;

export type TStoreDispatch = typeof store.dispatch;

export default store;

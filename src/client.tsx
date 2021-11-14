import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import { configureStore } from 'store/rootStore';
import { IState } from 'store/types';

import App from './App';

// eslint-disable-next-line no-underscore-dangle
const { store, history } = configureStore(window.__INITIAL_STATE__);

declare global {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    interface Window {
        __INITIAL_STATE__: IState;
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: Function;
    }
}

const persistor = persistStore(store);

ReactDOM.hydrate(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <PersistGate persistor={persistor}>
                <App />
            </PersistGate>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
);

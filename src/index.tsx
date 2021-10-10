import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// eslint-disable-next-line import/extensions
import { store } from '@/store';

import App from 'pages/App';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

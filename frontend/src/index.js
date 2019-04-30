import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import './index.scss';
import App from './App';

import { init } from './util/socket';
import { history, store } from './util/store';

init();

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    // eslint-disable-next-line no-undef
    document.getElementById('root')
);

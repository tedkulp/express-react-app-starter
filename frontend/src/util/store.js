import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducer';

export const history = createBrowserHistory();
const rootReducer = reducer(history);

export function createStore(storeReducer, _client, data) {
    // eslint-disable-next-line no-undef, no-underscore-dangle
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleware = [thunk, routerMiddleware(history), logger];
    const finalCreateStore = composeEnhancers(applyMiddleware(...middleware))(_createStore);
    const store = finalCreateStore(storeReducer, data);

    return store;
}

export const store = createStore(rootReducer, null, {});
export const { dispatch } = store;

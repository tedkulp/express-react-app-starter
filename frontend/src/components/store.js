import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import socket from '../util/socket';

export const history = createBrowserHistory();
const rootReducer = reducer(history);

export function createStore(reducer, client, data) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const middleware = [thunk, routerMiddleware(history), logger];
    const finalCreateStore = composeEnhancers(applyMiddleware(...middleware))(_createStore);
    const store = finalCreateStore(reducer, data);

    return store;
}

export const store = createStore(rootReducer, null, {});
export const dispatch = store.dispatch;

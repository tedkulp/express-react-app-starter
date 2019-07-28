import { routerMiddleware } from 'connected-react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import createReducer, { history } from './reducer';

let store;
const asyncReducers = {};

// eslint-disable-next-line no-undef, no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger({
    diff: true,
    duration: true,
});

const middleware = [thunk, routerMiddleware(history), logger];
const finalCreateStore = composeEnhancers(applyMiddleware(...middleware))(createStore);

export function getStore() {
    return store;
}

export function getDispatch() {
    return store.dispatch;
}

export default function configureStore(initialState = {}) {
    if (!store) {
        store = finalCreateStore(createReducer(asyncReducers), initialState);
    } else {
        store.replaceReducer(createReducer(asyncReducers));
    }
    return store;
}

export function injectAsyncReducer(name, asyncReducer) {
    asyncReducers[name] = asyncReducer;
    return configureStore();
}

import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { routerMiddleware } from 'react-router-redux';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';

export function createStore(history, client, data) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const historyMiddleware = routerMiddleware(history);
  const middleware = [thunk, historyMiddleware, logger];
  const finalCreateStore = composeEnhancers(applyMiddleware(...middleware))(_createStore);
  const store = finalCreateStore(reducer, data);

  return store;
};

export const history = createHistory();
export const store = createStore(history, null, {});
export const dispatch = store.dispatch;

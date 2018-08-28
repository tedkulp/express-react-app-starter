import { createStore as _createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import rootSaga from './sagas';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import socket from  '../util/socket';

const sagaMiddleware = createSagaMiddleware();

export function createStore(history, client, data) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const historyMiddleware = routerMiddleware(history);
  const middleware = [thunk, historyMiddleware, logger, sagaMiddleware];
  const finalCreateStore = composeEnhancers(applyMiddleware(...middleware))(_createStore);
  const store = finalCreateStore(connectRouter(history)(reducer), data);

  return store;
};

export const history = createHistory();
export const store = createStore(history, null, {});
export const dispatch = store.dispatch;
sagaMiddleware.run(rootSaga);

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import auth from '../reducers/auth';

export const history = createBrowserHistory();

export default function createReducer(asyncReducers = {}) {
    return combineReducers({
        router: connectRouter(history),
        auth,
        // Add static reducers here.  Or add them per component with injectAsyncReducer
        ...asyncReducers,
    });
}

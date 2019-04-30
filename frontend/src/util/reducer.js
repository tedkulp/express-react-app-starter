import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export default history =>
    combineReducers({
        // Add reducers here -- it will cause a warning by default
        router: connectRouter(history),
    });

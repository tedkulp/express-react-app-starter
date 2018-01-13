import { call, put, take, all } from 'redux-saga/effects';
import { req } from '../util/api';

function* checkStatus(getState) {
    while (true) {
        yield take('CHECK_STATUS');
        yield put({ type: 'START_CHECK_STATUS', loading: true });
        const result = yield call(req, 'GET', '/status');
        yield put({ type: 'FINISH_CHECK_STATUS', loading: false, data: result });
    }
}

export default function* rootSaga() {
    yield all([
        // Add all sagas to this list
        checkStatus(),
    ]);
}

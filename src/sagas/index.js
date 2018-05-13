import { all, fork } from 'redux-saga/effects';

import { watchLoginRequest } from './user';
import { watchFetchTodos } from './todos';

function* rootSaga() {
  yield all([
    fork(watchLoginRequest),
    fork(watchFetchTodos)
  ])
}

export default rootSaga;
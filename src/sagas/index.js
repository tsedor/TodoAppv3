import { all, fork } from 'redux-saga/effects';

import watchLoginRequest from './user';
import watchFetchTodos, { watchAddTodo, watchRemoveTodo, watchToggleTodo } from './todos';

function* rootSaga() {
  yield all([
    fork(watchLoginRequest),
    fork(watchFetchTodos),
    fork(watchAddTodo),
    fork(watchRemoveTodo),
    fork(watchToggleTodo),
  ]);
}

export default rootSaga;

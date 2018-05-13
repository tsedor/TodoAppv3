import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { FETCH_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_ERROR } from '../actions/const';

function* fetchTodos() {
  try {
    const response = yield axios.get('http://localhost:3001/todos');
    yield put({type: FETCH_TODOS_SUCCESS, todos: response.data})
  } catch(e) {
    console.log(e)
    yield put(FETCH_TODOS_ERROR, e)
  }
}

export function* watchFetchTodos() {
  yield takeEvery(FETCH_TODOS, fetchTodos)
}
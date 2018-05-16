import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import { host } from '../settings';

import { FETCH_TODOS, FETCH_TODOS_SUCCESS, FETCH_TODOS_ERROR } from '../actions/const';

function* fetchTodos() {
  try {
    const response = yield axios.get(`${host}/todos`);
    yield put({ type: FETCH_TODOS_SUCCESS, todos: response.data });
  } catch (e) {
    yield put(FETCH_TODOS_ERROR, e);
  }
}

function* watchFetchTodos() {
  yield takeEvery(FETCH_TODOS, fetchTodos);
}

export default watchFetchTodos;

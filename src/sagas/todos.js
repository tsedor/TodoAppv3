import { put, select, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

import settings from '../settings';

import {
  ADD_TODO,
  ADD_TODO_ERROR,
  FETCH_TODOS,
  FETCH_TODOS_SUCCESS,
  LOGOUT, REMOVE_TODO,
  REMOVE_TODO_ERROR,
  TOGGLE_TODO,
  TOGGLE_TODO_ERROR,
} from '../actions/const';

function* fetchTodos() {
  try {
    const token = yield select(state => state.user.token);
    const response = yield axios.get(`${settings.host}/todos`, {
      headers: {
        Authorization: token,
      },
    });
    yield put({ type: FETCH_TODOS_SUCCESS, todos: response.data });
  } catch (e) {
    yield put({ type: LOGOUT });
  }
}

function* watchFetchTodos() {
  yield takeEvery(FETCH_TODOS, fetchTodos);
}

function* addTodo(action) {
  try {
    const token = yield select(state => state.user.token);
    yield axios.post(`${settings.host}/addtodo`, { text: action.text }, {
      headers: {
        Authorization: token,
      },
    });
  } catch (e) {
    yield put({ type: ADD_TODO_ERROR });
  }
}

export function* watchAddTodo() {
  yield takeEvery(ADD_TODO, addTodo);
}

function* removeTodo(action) {
  try {
    const token = yield select(state => state.user.token);
    yield axios.delete(`${settings.host}/removetodo`, {
      headers: {
        Authorization: token,
      },
      data: {
        id: action.id,
      },
    });
  } catch (e) {
    yield put({ type: REMOVE_TODO_ERROR });
  }
}

export function* watchRemoveTodo() {
  yield takeEvery(REMOVE_TODO, removeTodo);
}

function* toggleTodo(action) {
  try {
    const token = yield select(state => state.user.token);
    yield axios.delete(`${settings.host}/toggletodo`, {
      headers: {
        Authorization: token,
      },
      data: {
        id: action.id,
      },
    });
  } catch (e) {
    yield put({ type: TOGGLE_TODO_ERROR });
  }
}

export function* watchToggleTodo() {
  yield takeEvery(TOGGLE_TODO, toggleTodo);
}

export default watchFetchTodos;

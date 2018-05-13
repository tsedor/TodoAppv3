import axios from 'axios';
import { put, select, takeLatest } from 'redux-saga/effects';

import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS } from "../actions/const";

function* loginRequest() {
  try {
    const password = yield select(state => state.user.passwordInputValue);
    const response = yield axios.post('http://localhost:3001/login', {password});
    yield put({ type: LOGIN_SUCCESS, token: response.data.token })
  } catch(e) {
    yield put({ type: LOGIN_ERROR })
  }
}

export function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUEST, loginRequest)
}
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import settings from '../settings';
import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS } from '../actions/const';

function* loginRequest(action) {
  try {
    const response = yield axios.post(`${settings.host}/login`, { password: action.password });
    yield put({ type: LOGIN_SUCCESS, token: response.data.token });
    localStorage.setItem('token', response.data.token);
  } catch (e) {
    yield put({ type: LOGIN_ERROR });
  }
}

function* watchLoginRequest() {
  yield takeLatest(LOGIN_REQUEST, loginRequest);
}

export default watchLoginRequest;

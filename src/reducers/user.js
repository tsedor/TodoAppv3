import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS, PASSWORD_INPUT_CHANGE } from "../actions/const";

const initialState = {
  logged: false,
  request: false,
  error: false,
  passwordInputValue: ''
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {...state, request: true}
    case LOGIN_ERROR:
      return {...state, request: false, error: true}
    case LOGIN_SUCCESS:
      return {...state, request: false, logged: true, token: action.token, error: false}
    case PASSWORD_INPUT_CHANGE:
      return {...state, passwordInputValue: action.value}
    default:
      return state;
  }
}

export default user;
import { LOGIN_REQUEST, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT } from '../actions/const';

const token = localStorage.getItem('token');

const initialState = {
  logged: Boolean(token),
  request: false,
  error: false,
  passwordInputValue: '',
  token,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, request: true };
    case LOGIN_ERROR:
      return { ...state, request: false, error: true };
    case LOGIN_SUCCESS:
      return {
        ...state, request: false, logged: true, token: action.token, error: false,
      };
    case LOGOUT:
      return { ...state, logged: false, token: '' };
    default:
      return state;
  }
};

export default user;

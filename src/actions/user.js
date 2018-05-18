import { LOGIN_REQUEST } from './const';

const loginRequest = password => ({
  type: LOGIN_REQUEST,
  password,
});

export default loginRequest;

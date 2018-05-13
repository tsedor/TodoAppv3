import { LOGIN_REQUEST, PASSWORD_INPUT_CHANGE } from "./const";

export const loginRequest = () => ({
  type: LOGIN_REQUEST
})

export const passwordInputChange = value => ({
  type: PASSWORD_INPUT_CHANGE,
  value
})
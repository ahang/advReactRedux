import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps, callback) => async dispatch => {
  const path = 'http://localhost:3090/signup';
  try {
    const response = await axios.post(path, formProps);
    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
  }
};

export const signin = (formProps, callback) => async dispatch => {
  const path = 'http://localhost:3090/login';
  try {
    const response = await axios.post(path, formProps);
    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: 'Invalid Login Credentials' });
  }
};

export const signout = () => {
  localStorage.removeItem('token');
  return {
    type: AUTH_USER,
    payload: ''
  };
};

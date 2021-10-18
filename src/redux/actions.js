import * as types from './actionTypes';

export const loadUserStart = () => ({
  type: types.LOAD_USER_START,
});

export const loadUserSuccess = (users) => ({
  type: types.LOAD_USER_SUCCESS,
  payload: users,
});

export const loadUserFailure = (error) => ({
  type: types.LOAD_USER_FAILURE,
  payload: error,
});

export const createUserStart = () => ({
  type: types.CREATE_USER_START,
});

export const createUserSuccess = (user) => ({
  type: types.CREATE_USER_SUCCESS,
  payload: user,
});

export const createUserFailure = (error) => ({
  type: types.CREATE_USER_FAILURE,
  payload: error,
});

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

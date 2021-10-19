import * as types from './actionTypes';

// load users
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
// load users end

// create user
export const createUserStart = (user) => ({
  type: types.CREATE_USER_START,
  payload: user,
});

export const createUserSuccess = () => ({
  type: types.CREATE_USER_SUCCESS,
});

export const createUserFailure = (error) => ({
  type: types.CREATE_USER_FAILURE,
  payload: error,
});
// create user end

// delete user
export const deleteUserStart = (userID) => ({
  type: types.DELETE_USER_START,
  payload: userID,
});

export const deleteUserSuccess = (userID) => ({
  type: types.DELETE_USER_SUCCESS,
  payload: userID,
});

export const deleteUserFailure = (error) => ({
  type: types.DELETE_USER_FAILURE,
  payload: error,
});
// delete user end

// update user
export const updateUserStart = (userDetails) => ({
  type: types.UPDATE_USER_START,
  payload: userDetails,
});

export const updateUserSuccess = () => ({
  type: types.UPDATE_USER_SUCCESS,
});

export const updateUserFailure = (error) => ({
  type: types.UPDATE_USER_FAILURE,
  payload: error,
});
// update user end

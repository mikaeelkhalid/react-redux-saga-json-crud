import {
  take,
  call,
  all,
  put,
  fork,
  takeLatest,
  delay,
} from 'redux-saga/effects';

import * as types from '../redux/actionTypes';

import {
  createUserFailure,
  createUserSuccess,
  deleteUserFailure,
  deleteUserSuccess,
  loadUserFailure,
  loadUserSuccess,
  updateUserFailure,
  updateUserSuccess,
} from '../redux/actions';

import {
  loadUsersApi,
  createUserApi,
  deleteUserApi,
  updateUserApi,
} from '../api/userApi';

// load users
function* onLoadUsersHandler() {
  try {
    const response = yield call(loadUsersApi);
    if (response.status === 200) {
      yield delay(500);
      yield put(loadUserSuccess(response.data));
    }
  } catch (error) {
    yield put(loadUserFailure(error));
  }
}

function* onLoadUsersRequest() {
  yield takeLatest(types.LOAD_USER_START, onLoadUsersHandler);
}
// load users end

// create user
function* onCreateUserHandler({ payload }) {
  try {
    const response = yield call(createUserApi, payload);
    if (response.status === 201) {
      yield put(createUserSuccess(response.data));
    }
  } catch (error) {
    yield put(createUserFailure(error));
  }
}

function* onCreateUserRequest() {
  yield takeLatest(types.CREATE_USER_START, onCreateUserHandler);
}
// crete user end

// delete user
function* onDeleteUserHandler(userID) {
  try {
    const response = yield call(deleteUserApi, userID);
    if (response.status === 200) {
      yield delay(500);
      yield put(deleteUserSuccess(userID));
    }
  } catch (error) {
    yield put(deleteUserFailure(error));
  }
}

function* onDeleteUserRequest() {
  while (true) {
    const { payload: userID } = yield take(types.DELETE_USER_START);
    yield call(onDeleteUserHandler, userID);
  }
}
// delete user end

// update user
function* onUpdateUserHandler({ payload: { id, user } }) {
  try {
    const response = yield call(updateUserApi, id, user);
    if (response.status === 200) {
      yield delay(500);
      yield put(updateUserSuccess());
    }
    //console.log(id, user);
  } catch (error) {
    yield put(updateUserFailure(error));
  }
}

function* onUpdateUserRequest() {
  yield takeLatest(types.UPDATE_USER_START, onUpdateUserHandler);
}
// update user end

const userSagas = [
  fork(onLoadUsersRequest),
  fork(onCreateUserRequest),
  fork(onDeleteUserRequest),
  fork(onUpdateUserRequest),
];

export default function* rootSagas() {
  yield all([...userSagas]);
}

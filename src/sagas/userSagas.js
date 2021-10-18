import {
  take,
  call,
  all,
  put,
  fork,
  cancel,
  takeEvery,
  takeLatest,
  delay,
} from 'redux-saga/effects';
import * as types from '../redux/actionTypes';

import {
  createUserFailure,
  createUserStart,
  createUserSuccess,
  loadUserFailure,
  loadUserSuccess,
} from '../redux/actions';
import { loadUsersApi, createUserApi } from '../api/userApi';

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

const userSagas = [fork(onLoadUsersRequest), fork(onCreateUserRequest)];

export default function* rootSagas() {
  yield all([...userSagas]);
}

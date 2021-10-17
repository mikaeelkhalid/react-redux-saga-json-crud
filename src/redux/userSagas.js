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
import * as types from './actionTypes';

import { loadUserFailure, loadUserSuccess } from './actions';
import { loadUsersApi } from '../api/userApi';

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

const userSagas = [fork(onLoadUsersRequest)];

export default function* rootSagas() {
  yield all([...userSagas]);
}

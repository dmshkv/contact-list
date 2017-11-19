// import { put, select, takeLatest } from 'redux-saga/effects';
import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';

import { LOAD_CONTACTS } from '../actionTypes';
import { loadContactsSuccess, loadContactsError } from '../actions/contactListActions';

export function* getData() {
  try {
    const response = yield call(axios, '/api/contacts');
    yield put(loadContactsSuccess(response.data));
  } catch (err) {
    yield put(loadContactsError(err));
  }
}

export function* getDataSaga() {
  yield takeLatest(LOAD_CONTACTS, getData);
}

export default [
  getDataSaga
];

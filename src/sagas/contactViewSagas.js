import { put, takeLatest, call, select } from 'redux-saga/effects';
import axios from 'axios';

import { LOAD_CONTACT } from '../actionTypes';
import { loadContactSuccess, loadContactError } from '../actions/contactViewActions';

export const getContactId = state => state.getIn(['route', 'params', 'id']);

export function* getData() {
  try {
    const contactId = yield select(getContactId);
    const response = yield call(axios, `/api/detailed/${contactId}`);
    yield put(loadContactSuccess(response.data));
  } catch (err) {
    yield put(loadContactError(err));
  }
}

export function* getDataSaga() {
  yield takeLatest(LOAD_CONTACT, getData);
}

export default [
  getDataSaga
];

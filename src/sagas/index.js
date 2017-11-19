import { all, call } from 'redux-saga/effects';
import contactListSagas from './contactListSagas';
import contactViewSagas from './contactViewSagas';

const rootSagas = [
  ...contactListSagas,
  ...contactViewSagas
];

export default function* root() {
  yield all([
    ...rootSagas.map(saga => call(saga))
  ]);
}

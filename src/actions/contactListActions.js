import {
  LOAD_CONTACTS,
  LOAD_CONTACTS_SUCCESS,
  LOAD_CONTACTS_ERROR
} from '../actionTypes';

export function loadContacts(payload) {
  return {
    type: LOAD_CONTACTS,
    payload
  };
}

export function loadContactsSuccess(payload) {
  return {
    type: LOAD_CONTACTS_SUCCESS,
    payload
  };
}

export function loadContactsError(payload) {
  return {
    type: LOAD_CONTACTS_ERROR,
    payload,
    error: true
  };
}

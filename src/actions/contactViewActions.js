import {
  LOAD_CONTACT,
  LOAD_CONTACT_SUCCESS,
  LOAD_CONTACT_ERROR
} from '../actionTypes';

export function loadContact(payload) {
  return {
    type: LOAD_CONTACT,
    payload
  };
}

export function loadContactSuccess(payload) {
  return {
    type: LOAD_CONTACT_SUCCESS,
    payload
  };
}

export function loadContactError(payload) {
  return {
    type: LOAD_CONTACT_ERROR,
    payload,
    error: true
  };
}

import { fromJS } from 'immutable';

import {
  LOAD_CONTACTS,
  LOAD_CONTACTS_SUCCESS,
  LOAD_CONTACTS_ERROR
} from '../actionTypes';

const defaultState = fromJS({
  contacts: [],
  loading: false,
  // limit: 10,
  // offset: 0,
  error: false
});

function contactListReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_CONTACTS: {
      return state.set('loading', true);
    }
    case LOAD_CONTACTS_SUCCESS: {
      return state.set('loading', false).set('contacts', fromJS(action.payload));
    }
    case LOAD_CONTACTS_ERROR: {
      return state.set('loading', false).set('error', true);
    }
    default:
      return state;
  }
}

export default contactListReducer;

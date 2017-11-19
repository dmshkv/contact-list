import { fromJS } from 'immutable';

import {
  LOAD_CONTACT,
  LOAD_CONTACT_SUCCESS,
  LOAD_CONTACT_ERROR
} from '../actionTypes';

const defaultState = fromJS({
  detailed: {
    history: []
  },
  loading: false,
  error: false
});

function contactViewReducer(state = defaultState, action) {
  switch (action.type) {
    case LOAD_CONTACT: {
      return state.set('loading', true);
    }
    case LOAD_CONTACT_SUCCESS: {
      return state.set('loading', false).set('detailed', fromJS(action.payload));
    }
    case LOAD_CONTACT_ERROR: {
      return state.set('loading', false).set('error', true);
    }
    default:
      return state;
  }
}

export default contactViewReducer;

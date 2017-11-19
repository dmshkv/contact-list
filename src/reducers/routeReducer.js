import { LOCATION_CHANGE } from 'react-router-redux';
import { fromJS } from 'immutable';

import {
  URL_PARAMS_UPDATE
} from '../actionTypes';

const routeInitialState = fromJS({
  location: null,
  params: {}
});

export default function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return state.merge({
        location: action.payload
      });
    case URL_PARAMS_UPDATE: {
      return state.merge({
        params: action.payload
      });
    }
    default:
      return state;
  }
}

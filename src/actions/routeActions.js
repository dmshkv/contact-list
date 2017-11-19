import {
  URL_PARAMS_UPDATE
} from '../actionTypes';

export function urlParamsUpdate(payload) {
  return {
    type: URL_PARAMS_UPDATE,
    payload
  };
}

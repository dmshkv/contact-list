import { combineReducers } from 'redux-immutable';
import contactList from './contactListReducer';
import contactView from './contactViewReducer';
import routeReducer from './routeReducer';

const rootReducer = combineReducers({
  contactList,
  contactView,
  route: routeReducer
});

export default rootReducer;

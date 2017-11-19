import { composeWithDevTools } from 'redux-devtools-extension';
import { fromJS } from 'immutable';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers/index';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (preloadedState, history) => {
  const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
  ];

  const composeEnhancers = composeWithDevTools({
  });

  const enhancers = [
    applyMiddleware(...middlewares)
  ];

  const store = createStore(
    reducers,
    fromJS(preloadedState),
    composeEnhancers(...enhancers)
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;

import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware();

const finalCreateStore = compose(
  applyMiddleware(logger, thunk, sagaMiddleware),
)(createStore);

export function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers'))
    );
  }

  return store;
};

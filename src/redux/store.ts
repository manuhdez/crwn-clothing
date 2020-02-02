import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composeEnhancer =
  process.env.NODE_ENV === 'development'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);

const persistore = persistStore(store);

export default { store, persistore };

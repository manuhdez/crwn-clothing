import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
// import logger from 'redux-logger';

import rootReducer from './rootReducer';

const composeEnhancer =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const middlewares = [];

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

const persistore = persistStore(store);

export default { store, persistore };

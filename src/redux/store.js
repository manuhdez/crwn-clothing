import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import rootReducer from './rootReducer';

const middlewares = [thunk];
let composeEnhancer = compose;

if (process.env.NODE_ENV === 'development') {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

const persistore = persistStore(store);

export default { store, persistore };

import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';
import { fetchCollectionsStart } from './shop/shop.sagas';

import rootReducer from './rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composeEnhancer =
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

sagaMiddleware.run(fetchCollectionsStart);

const persistore = persistStore(store);

export default { store, persistore };

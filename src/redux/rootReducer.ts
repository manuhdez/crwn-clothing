import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

import userReducer, { UserReducerState } from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

export interface StoreState {
  user: UserReducerState;
  cart: any;
  directory: any;
  shop: any;
}

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers<StoreState>({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);

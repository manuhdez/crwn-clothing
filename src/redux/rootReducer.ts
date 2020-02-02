import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

import userReducer, { UserReducerState } from './user/user.reducer';
import cartReducer, { CartReducerState } from './cart/cart.reducer';
import directoryReducer, {
  DirectoryState
} from './directory/directory.reducer';
import shopReducer, { ShopReducerState } from './shop/shop.reducer';

export interface StoreState {
  user: UserReducerState;
  cart: CartReducerState;
  directory: DirectoryState;
  shop: ShopReducerState;
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

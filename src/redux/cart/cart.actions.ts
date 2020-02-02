import { CartTypes } from '../action-types';
import { CartItem } from '../../types';
import { CartReducerAction } from './cart.reducer';

export const toggleCartDropdown = (): CartReducerAction => ({
  type: CartTypes.TOGGLE_CART_DROPDOWN
});

export const addItem = (item: CartItem): CartReducerAction => ({
  type: CartTypes.ADD_ITEM,
  payload: item
});

export const removeItem = (item: CartItem): CartReducerAction => ({
  type: CartTypes.REMOVE_ITEM,
  payload: item
});

export const clearCartItem = (item: CartItem): CartReducerAction => ({
  type: CartTypes.CLEAR_CART_ITEM,
  payload: item
});

export const clearCart = (): CartReducerAction => ({
  type: CartTypes.CLEAR_CART
});

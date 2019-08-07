import { cartTypes } from '../action-types';

export const toggleCartDropdown = () => ({
  type: cartTypes.TOGGLE_CART_DROPDOWN
});

export const addItem = (item) => ({
  type: cartTypes.ADD_ITEM,
  payload: item
});

export const removeItem = (item) => ({
  type: cartTypes.REMOVE_ITEM,
  payload: item
});

export const clearCartItem = (item) => ({
  type: cartTypes.CLEAR_CART_ITEM,
  payload: item
});

export const clearCart = () => ({
  type: cartTypes.CLEAR_CART
});

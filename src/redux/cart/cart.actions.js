import { cartTypes } from '../action-types';

const {
  TOGGLE_CART_DROPDOWN,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_CART_ITEM
} = cartTypes;

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item
});

export const clearCartItem = (item) => ({
  type: CLEAR_CART_ITEM,
  payload: item
});

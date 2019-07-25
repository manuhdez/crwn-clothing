import { cartTypes } from '../action-types';

const { TOGGLE_CART_DROPDOWN, ADD_ITEM } = cartTypes;

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item
});

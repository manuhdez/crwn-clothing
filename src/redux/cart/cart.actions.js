import { cartTypes } from '../action-types';

const { TOGGLE_CART_DROPDOWN } = cartTypes;

export const toggleCartDropdown = () => ({
  type: TOGGLE_CART_DROPDOWN
});

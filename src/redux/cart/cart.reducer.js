import { cartTypes } from '../action-types';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from './cart.utils';

const initialState = {
  showCartDropdown: false,
  cartItems: []
};

const cartReducer = (state = initialState, { type, payload }) => {
  const {
    TOGGLE_CART_DROPDOWN,
    ADD_ITEM,
    REMOVE_ITEM,
    CLEAR_CART_ITEM
  } = cartTypes;

  switch (type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        showCartDropdown: !state.showCartDropdown
      };

    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      };

    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      };

    case CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, payload)
      };

    default:
      return state;
  }
};

export default cartReducer;

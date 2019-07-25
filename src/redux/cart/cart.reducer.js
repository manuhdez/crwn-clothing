import { cartTypes } from '../action-types';
import { addItemToCart } from './cart.utils';

const initialState = {
  showCartDropdown: false,
  cartItems: []
};

const cartReducer = (state = initialState, { type, payload }) => {
  const { TOGGLE_CART_DROPDOWN, ADD_ITEM } = cartTypes;

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

    default:
      return state;
  }
};

export default cartReducer;

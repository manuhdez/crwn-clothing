import { CartTypes } from '../action-types';
import { CartItem } from '../../types';
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart
} from './cart.utils';

export interface CartReducerState {
  showCartDropdown: boolean;
  cartItems: CartItem[];
}

export interface CartReducerAction {
  type: CartTypes;
  payload?: any;
}

const initialState: CartReducerState = {
  showCartDropdown: false,
  cartItems: []
};

const cartReducer = (
  state = initialState,
  action: CartReducerAction
): CartReducerState => {
  const { type, payload } = action;

  switch (type) {
    case CartTypes.TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        showCartDropdown: !state.showCartDropdown
      };

    case CartTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload)
      };

    case CartTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload)
      };

    case CartTypes.CLEAR_CART_ITEM:
      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, payload)
      };
    case CartTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: []
      };
    default:
      return state;
  }
};

export default cartReducer;

import { cartTypes } from '../action-types';

const initialState = {
  showCartDropdown: false
};

const cartReducer = (state = initialState, { type, payload }) => {
  const { TOGGLE_CART_DROPDOWN } = cartTypes;
  switch (type) {
    case TOGGLE_CART_DROPDOWN:
      return {
        ...state,
        showCartDropdown: !state.showCartDropdown
      };
    default:
      return state;
  }
};

export default cartReducer;

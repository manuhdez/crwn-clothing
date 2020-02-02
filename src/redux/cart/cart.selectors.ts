import { createSelector } from 'reselect';
import { CartItem } from '../../types';
import { StoreState } from '../rootReducer';
import { CartReducerState } from './cart.reducer';

/**
 * First create an input selector that returns the part of the state we eill be working with
 *
 * @param state The current store state object
 */
const selectCart = (state: StoreState): CartReducerState => state.cart;

/**
 * Then use the input selector to create a new selector that will be returning the actual value we need from the state
 */
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

/**
 *
 */
export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.reduce((accummulated, item) => accummulated + item.quantity, 0)
);

/**
 *
 */
export const selectShowCartDropdown = createSelector(
  [selectCart],
  (cart) => cart.showCartDropdown
);

/**
 *
 */
export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  (items) =>
    items.reduce(
      (accummulated: number, item: CartItem) =>
        accummulated + item.price * item.quantity,
      0
    )
);

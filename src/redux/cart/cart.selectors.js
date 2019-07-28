import { createSelector } from 'reselect';

// first create an input selector that returns the part of the state we eill be working with
const selectCart = (state) => state.cart;

// then use the input selector to create a new selector that will be returning the actual value we need from the state
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (items) =>
    items.reduce((accummulated, item) => accummulated + item.quantity, 0)
);

export const selectShowCartDropdown = createSelector(
  [selectCart],
  (cart) => cart.showCartDropdown
);

export const selectCartItemsTotalPrice = createSelector(
  [selectCartItems],
  (items) =>
    items.reduce(
      (accummulated, item) => accummulated + item.price * item.quantity,
      0
    )
);

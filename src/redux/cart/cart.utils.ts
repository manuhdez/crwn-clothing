import { CartItem } from '../../types';

/**
 * Adds the received item to the current cart
 *
 * @param  items The current list of cartItems
 * @param newItem The new cartItem to add into the card
 */
export const addItemToCart = (
  items: CartItem[],
  newItem: CartItem
): CartItem[] => {
  const existingCartItem = items.find((item) => item.id === newItem.id);

  if (existingCartItem) {
    return items.map((item) =>
      item.id === newItem.id
        ? { ...newItem, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...items, { ...newItem, quantity: 1 }];
};

/**
 * Removes the selected item from the cart
 *
 * @param cartItems
 * @param itemToRemove
 */
export const removeItemFromCart = (
  cartItems: CartItem[],
  itemToRemove: CartItem
) => {
  // decrease quantity by one
  const updatedCartItems = cartItems.map((cartItem) => {
    const updatedCartItem = { ...cartItem };

    if (updatedCartItem.id === itemToRemove.id) {
      updatedCartItem.quantity -= 1;
    }

    return updatedCartItem;
  });

  // filter items that got to 0 and remove them from cart
  return updatedCartItems.filter((cartItem) => cartItem.quantity > 0);
};

/**
 * Clears all ocurrences of the same product from the cart
 *
 * @param cartItems
 * @param itemToClear
 */
export const clearItemFromCart = (
  cartItems: CartItem[],
  itemToClear: CartItem
) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
};

export const addItemToCart = (items, newItem) => {
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

export const removeItemFromCart = (cartItems, itemToRemove) => {
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

export const clearItemFromCart = (cartItems, itemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToClear.id);
};

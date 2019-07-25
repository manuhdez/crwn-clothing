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

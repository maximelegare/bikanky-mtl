export const addItemToCartUtil = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToAdd, cartQuantity: 1 }];
};

export const increaseQuantityUtil = (cartItems, cartItemToUpdate) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToUpdate.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToUpdate.id
        ? { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToUpdate, cartQuantity: 1 }];
};

export const decreaseQuantityUtil = (cartItems, cartItemToUpdate) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToUpdate.id
  );

  if (existingCartItem.cartQuantity === 1) {
  
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToUpdate.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToUpdate.id
      ? { ...cartItem, cartQuantity: cartItem.cartQuantity - 1 }
      : cartItem
  );
};


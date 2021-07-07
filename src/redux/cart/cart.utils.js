export const addItemToCartUtil = (cartItems, cartItemToAdd) => {
  const existCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, {...cartItemToAdd, cartQuantity: 1}]
};

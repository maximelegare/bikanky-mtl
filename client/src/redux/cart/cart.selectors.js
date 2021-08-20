import { createSelector } from "reselect";

const selectCartInitialState = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartInitialState],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.cartQuantity, 0)
);

export const selectCartTotalPrice = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + (cartItem.cartQuantity * cartItem.price), 0)
);

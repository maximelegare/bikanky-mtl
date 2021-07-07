import { createSelector } from "reselect";

const selectCartInitialState = (state) => state.cart;

export const selectCartVisibility = createSelector(
  [selectCartInitialState],
  (cart) => cart.cartVisibility
);

export const selectCartItems = createSelector(
  [selectCartInitialState],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((acc, cartItem) => acc + cartItem.cartQuantity, 0)
);

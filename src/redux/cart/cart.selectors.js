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

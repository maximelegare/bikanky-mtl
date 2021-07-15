import { createSelector } from "reselect";

const selectDropdownInitialState = (state) => state.dropdown;

export const selectCartVisibility = createSelector(
  [selectDropdownInitialState],
  (dropdown) => dropdown.cartVisibility
);

export const selectSignInVisibility = createSelector(
  [selectDropdownInitialState],
  (dropdown) => dropdown.signInVisibility
);

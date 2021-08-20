import { createSelector } from "reselect";

const selectDropdownInitialState = (state) => state.dropdown;

// cart visibility selectors
export const selectHoverCartVisibility = createSelector(
  [selectDropdownInitialState],
  (dropdown) => dropdown.cart.hover
);
export const selectClickCartVisibility = createSelector(
  [selectDropdownInitialState],
  (dropdown) => dropdown.cart.click
);



// SignIn visibility selectors
export const selectHoverSignInVisibility = createSelector(
  [selectDropdownInitialState],
  (dropdown) => dropdown.signIn.hover
);

export const selectClickSignInVisibility = createSelector(
  [selectDropdownInitialState],
  (dropdown) => dropdown.signIn.click
);
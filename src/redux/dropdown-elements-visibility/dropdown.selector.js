import { createSelector } from "reselect";

const selectDropdownInitialState = (state) => state.dropdown;

// cart visibility selectors
export const selectHoverCartVisibility = createSelector(
  [selectDropdownInitialState],
  (dropdown) => dropdown.cartVisibility.hover
);
export const selectClickCartVisibility = createSelector(
  [selectDropdownInitialState],
  (dropdown) => dropdown.cartVisibility.click
);



// SignIn visibility selectors
export const selectHoverSignInVisibility = createSelector(
  [selectDropdownInitialState],
  (dropdown) => dropdown.signInVisibility.hover
);

export const selectClickSignInVisibility = createSelector(
  [selectDropdownInitialState],
  (dropdown) => dropdown.signInVisibility.click
);
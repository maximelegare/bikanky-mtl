import { createSelector } from "reselect";

const selectSignInInitial = (state) => state.signInSignUp;

export const selectSignInDropdownVisibility = createSelector(
  [selectSignInInitial],
  (signInSignUp) => signInSignUp.signInVisibility
);

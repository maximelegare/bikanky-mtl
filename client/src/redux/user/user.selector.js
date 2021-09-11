import { createSelector } from "reselect";

const selectUserReducer = (state) => state.user;

export const selectCurrentUser = createSelector([selectUserReducer], (user) => {
  return user.currentUser;
});

export const selectFetchUserloading = createSelector(
  [selectUserReducer],
  (user) => user.isLoading
);

export const selectIsAdmin = createSelector(
  [selectUserReducer],
  (user) => user.isAdmin
);

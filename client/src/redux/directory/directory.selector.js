import { createSelector } from "reselect";

const selectDirectoryInitialState = (state) => state.directory.initialState;

export const selectSections = createSelector(
  [selectDirectoryInitialState],
  (initialState) =>  {
    return initialState.sections}
);
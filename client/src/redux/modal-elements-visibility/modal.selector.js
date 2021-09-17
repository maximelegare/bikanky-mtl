import { createSelector } from "reselect";

const selectModalInitialState = (state) => state.modal;

export const selectAddressModalVisibility = createSelector(
  [selectModalInitialState],
  (modal) => {
    return modal.addressModal;
  }
);

export const selectNewItemModalVisibility = createSelector(
  [selectModalInitialState],
  (modal) => {
    return modal.newItem;
  }
);
export const selectNewCategoryModalVisibility = createSelector(
  [selectModalInitialState],
  (modal) => {
    return modal.newCategory;
  }
);

export const selectconfirmationModalVisibility = createSelector(
  [selectModalInitialState],
  (modal) => {
    return modal.confirmationModal;
  }
);

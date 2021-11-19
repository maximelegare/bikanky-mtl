import { createSelector } from "reselect";

const selectModalInitialState = (state) => state.modal;

export const selectAddressModalVisibility = createSelector(
  [selectModalInitialState],
  (modal) => {
    return modal.addressModal;
  }
);
export const selectBlackModalVisibility = createSelector(
  [selectModalInitialState],
  (modal) => {
    return modal.blackModal;
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
export const selectUpdateItemModalVisibility = createSelector(
  [selectModalInitialState],
  (modal) => {
    return modal.updateItem;
  }
);
export const selectDeleteItemImagesStatus = createSelector(
  [selectModalInitialState],
  (modal) => {
    return modal.deleteItemImagesStatus;
  }
);

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addressModal: false,
  newItem: false,
  confirmationModal: false,
  newCategory: false,
  updateItem: false,
  deleteItemImagesStatus:false,
  blackModal:false
};

const modalSlice = createSlice({
  name: "modalVisibility",
  initialState,
  reducers: {
    setModalVisibility(state, { payload }) {
      // if there is closeAllModal in the payload
      if (payload.closeAllModal) {
        // create an array with the state object => pass all the values and make them false
        const transformedCollections = Object.values(state).map((modalName) => {
          return { modalName: false };
        });
        // transform the array in an object
        return transformedCollections.reduce((acc, modalName) => {
          acc[modalName] = modalName;
          return acc;
        }, {});

      } else {
        // change the state with the payload visibility
        state[payload.modalName] = payload.visibility;
      }
    },
    deleteItemImagesStatus(state, {payload}){
      state.deleteItemImagesStatus = payload
    }
  },
});

export default modalSlice.reducer;
export const { setModalVisibility, deleteItemImagesStatus } = modalSlice.actions;

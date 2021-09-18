import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    addressModal:false,
    newItem:false,
    confirmationModal:false,
    newCategory:false,
    updateItem:false
  };
  
  const modalSlice = createSlice({
    name: "modalVisibility",
    initialState,
    reducers: {
      setModalVisibility(state, { payload }) {
        state[payload.modalName] = payload.visibility;
      },
    },
  });
  
  export default modalSlice.reducer;
  export const { setModalVisibility } = modalSlice.actions;
  
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signInVisibility: false,
  cartVisibility:false
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggleDropdownVisibility(state, action) {
      const value = action.payload.value
  
      return {
        ...state,
        [action.payload.type]:value
      }
      
    },
  },
});

export const {toggleDropdownVisibility} = dropdownSlice.actions

export default dropdownSlice.reducer
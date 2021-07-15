import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signInVisibility: {
    hover: false,
    click: false,
  },
  cartVisibility: {
    hover: false,
    click: false,
  },
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggleHoverDropdownVisibility(state, action) {
      state[action.payload.type].hover = action.payload.value;
    },
    toggleClickDropdownVisibility(state, action) {
      state[action.payload.type].click = !state[action.payload.type].click;
    },
  },
});

export const { toggleHoverDropdownVisibility, toggleClickDropdownVisibility } = dropdownSlice.actions;

export default dropdownSlice.reducer;

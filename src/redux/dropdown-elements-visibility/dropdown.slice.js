import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signIn: {
    hover: false,
    click: false,
  },
  cart: {
    hover: false,
    click: false,
  },
};

const dropdownSlice = createSlice({
  name: "dropdown",
  initialState,
  reducers: {
    toggleHoverDropdownVisibility(state, action) {
      state[action.payload.dropdownName].hover = action.payload.value;

      // hides all the other dropdown when it's clicked to prevent multiple dropdown to be open at the same time
      const dropdownToHide = Object.entries(state).filter(
        (dropdown) => dropdown[0] !== action.payload.dropdownName
      );
      state[dropdownToHide[0][0]].click = false;
    },
    toggleClickDropdownVisibility(state, action) {
      // hides all the other dropdown when it's clicked to prevent multiple dropdown to be open at the same time
      const dropdownToHide = Object.entries(state).filter(
        (dropdown) => dropdown[0] !== action.payload.dropdownName
      );
      state[dropdownToHide[0][0]].click = false;

      // sets the dropdown click property to the oposite it was
      state[action.payload.dropdownName].click = action.payload.value
    },
  },
});

export const { toggleHoverDropdownVisibility, toggleClickDropdownVisibility } =
  dropdownSlice.actions;

export default dropdownSlice.reducer;

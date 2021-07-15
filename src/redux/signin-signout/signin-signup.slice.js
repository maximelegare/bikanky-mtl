import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  signInVisibility: false,
};

const signInSignUpSlice = createSlice({
  name: "signInSignUp",
  initialState,
  reducers: {
    toggleSignInVisibility(state) {
      state.signInVisibility = !state.signInVisibility;
    },
  },
});

export const {toggleSignInVisibility} = signInSignUpSlice.actions

export default signInSignUpSlice.reducer
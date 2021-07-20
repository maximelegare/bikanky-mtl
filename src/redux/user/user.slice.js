import { createSlice } from "@reduxjs/toolkit";
import { auth } from "../../firebase/firebase.utils";

// check if there is a user and sets it
export const getCurrentUserStart = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      dispatch(setCurrentUser(user));
    });
  };
};

const initialState = {
  currentUser: null,
  status: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, { payload }) {
      state.currentUser = payload;
    },
  },
});
export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
// import { auth } from "../../firebase/firebase.utils";

// const userLogIn = createAsyncThunk("user", async () => {});

// export const getCurrentUser = createAsyncThunk("user/getCurrentUser", async () => {
//     const {data} = await fetch('https://jsonplaceholder.typicode.com/posts')
//     return data;
//   });

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
  //   extraReducers:  {
  //     [getCurrentUser.pending] : (state) => {
  //       state.status = "pending"
  //     },
  //     [getCurrentUser.fulfilled] : (state, { payload }) => {
  //       state.status = "fulfilled"
  //       state.currentUser = payload
  //     },
  //     [getCurrentUser.rejected] : (state) => {
  //       state.status = "rejected"
  //     }

  //   },
});
export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;

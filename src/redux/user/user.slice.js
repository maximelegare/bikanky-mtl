import { createSlice } from "@reduxjs/toolkit";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";


export const getCurrentUserStart = () => {
  return (dispatch) => {

    // listen to user 
    auth.onAuthStateChanged(async (userAuth) => {
      // if there is a user, createUserProfileDocument => always returns the userRef
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // listen to the userRef => when changes, create user with only the values I want
        userRef.onSnapshot((snapshot) => {
          dispatch(
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data(),
            })
          );
        });
      } else {
        // if there is no user, set current user to null
        dispatch(setCurrentUser(null));
      }
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

import { createSlice } from "@reduxjs/toolkit";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

export const getCurrentUserStart = () => {
  return (dispatch) => {
    dispatch(fetchUserLoading(true));

    // listen to user
    auth.onAuthStateChanged(async (userAuth) => {
      // if there is a user, createUserProfileDocument => always returns the userRef
      try {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          // listen to the userRef => when changes, create user with only the values I want
          userRef.onSnapshot(async (snapshot) => {
            await dispatch(
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
      } catch (err) {
        dispatch(fetchUserError(err));
      }
      // dispatch(fetchUserLoading(false))
    });
    
  };
};





const initialState = {
  currentUser: null,
  error: null,
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, { payload }) {
      console.log('is loading current user' + state.isLoading)
      state.currentUser = payload;
      state.isLoading = false
    },
    fetchUserLoading(state, { payload }) {
      state.isLoading = payload;
    },
    fetchUserError(state, { payload }) {
      state.error = payload;
    },
  },
});
export const { setCurrentUser, fetchUserLoading, fetchUserError } =
  userSlice.actions;
export default userSlice.reducer;

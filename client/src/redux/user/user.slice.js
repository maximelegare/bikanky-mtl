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

          // sets admin status to redux
          const adminStatus = await userAuth.getIdTokenResult()
          if(adminStatus.claims.admin){
            dispatch(setAdminStatus(adminStatus.claims.admin))
          }
          
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
  currentUser: undefined,
  isAdmin:null,
  error: null,
  isLoading: true,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser(state, { payload }) {
      state.currentUser = payload;
      state.isLoading = false
    },
    fetchUserLoading(state, { payload }) {
      state.isLoading = payload;
    },
    fetchUserError(state, { payload }) {
      state.error = payload;
    },
    setAdminStatus(state, {payload}){
      state.isAdmin = payload
    }
  },
});
export const { setCurrentUser, fetchUserLoading, fetchUserError, setAdminStatus } =
  userSlice.actions;
export default userSlice.reducer;

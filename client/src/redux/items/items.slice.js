import { createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../firebase/firebase.utils";
import { transformArrayToObject } from "../../firebase/firebase.utils";

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection("categories");

    try {
      collectionRef.onSnapshot(async (snapshot) => {
        const transformedCollection = transformArrayToObject(snapshot);
        dispatch(fetchCollectionsSuccess(transformedCollection));
        dispatch(fetchCollectionsLoading(false));
      });
    } catch (err) {
      dispatch(fetchCollectionsError(err));
    }
  };
};









const initialState = {
  isLoading: true,
  itemsCategories: null,
  error: null,
};

const itemsSlice = createSlice({
  name: "Items",
  initialState,
  reducers: {
    fetchCollectionsLoading(state, { payload }) {
      state.isLoading = payload;
    },
    fetchCollectionsSuccess(state, { payload }) {
      state.itemsCategories = payload;
    },
    fetchCollectionsError(state, { payload }) {
      state.error = payload;
    },
  },
});

export default itemsSlice.reducer;
export const {
  fetchCollectionsError,
  fetchCollectionsSuccess,
  fetchCollectionsLoading,
} = itemsSlice.actions;

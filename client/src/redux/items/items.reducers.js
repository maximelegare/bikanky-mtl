import { createReducer } from "@reduxjs/toolkit";
import SHOP_DATA from "../shop.data";

const initialState = {
  itemsCategories: SHOP_DATA,
};

const productReducer = createReducer(
  {
    initialState,
  },
  (builder) => {
    builder.addDefaultCase((state) => state.itemsCategories);
  }
);

export default productReducer;

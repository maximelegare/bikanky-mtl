import { createReducer } from "@reduxjs/toolkit";
import SHOP_DATA from "../shop.data";

const initialState = {
  sections: SHOP_DATA,
};

const directoryRecucer = createReducer(
  {
    initialState,
  },
  (builder) => {
    builder.addDefaultCase((state) => state.sections);
  }
);
export default directoryRecucer;


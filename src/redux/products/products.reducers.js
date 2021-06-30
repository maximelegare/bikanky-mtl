import { createReducer } from "@reduxjs/toolkit";
import SHOP_DATA from './shop.data'
const initialState = {
  productsCategories: SHOP_DATA
};

const productReducer = createReducer({
  initialState,
},
builder => {
    builder
        .addDefaultCase((state) => state.productslist)

}

);

export default productReducer;

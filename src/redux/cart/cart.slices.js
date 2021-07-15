import { createSlice } from "@reduxjs/toolkit";
import { addItemToCartUtil } from './cart.utils'


const initialState = {
  cartItems:[]
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItemToCart(state, action){
      state.cartItems = addItemToCartUtil(state.cartItems, action.payload)
      // state.cartItems.push(action.payload)
    },
    deleteItemFromCart(state, action){
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload)
    }
  },
});

export default cartSlice.reducer

export const { addItemToCart, deleteItemFromCart } = cartSlice.actions

import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToCartUtil,
  increaseQuantityUtil,
  decreaseQuantityUtil,
} from "./cart.utils";

const initialState = {
  cartItems: [],
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      state.cartItems = addItemToCartUtil(state.cartItems, action.payload);
      // state.cartItems.push(action.payload)
    },
    deleteItemFromCart(state, { payload }) {
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== payload)
    },
    cartItemQuantityIncrease(state, { payload }) {
      state.cartItems = increaseQuantityUtil(state.cartItems, payload);
    },
    cartItemQuantityDecrease(state, { payload }) {
      state.cartItems = decreaseQuantityUtil(state.cartItems, payload);
    },
  },
});

export default cartSlice.reducer;

export const {
  addItemToCart,
  deleteItemFromCart,
  cartItemQuantityIncrease,
  cartItemQuantityDecrease,
} = cartSlice.actions;

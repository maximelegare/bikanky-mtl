import { createSlice } from "@reduxjs/toolkit";
// import { addItemToCartUtil } from './cart.utils'


const initialState = {
  cartVisibility: true,
  cartItems:[]
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    toggleCartVisibility(state){
        state.cartVisibility = !state.cartVisibility
    },
    addItemToCart(state, action){
      
      state.cartItems.push(action.payload)
    },
    deleteItemFromCart(state, action){
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload)
    }
  },
});

export default cartSlice.reducer

export const { toggleCartVisibility, addItemToCart, deleteItemFromCart } = cartSlice.actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartVisibility: true,
};
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    toggleCartVisibility(state){
        state.cartVisibility = !state.cartVisibility
    }
  },
});

export default cartSlice.reducer

export const { toggleCartVisibility } = cartSlice.actions

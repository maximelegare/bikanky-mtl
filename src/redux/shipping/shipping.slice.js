import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rates: {
    canada: 6.99,
    international: 10.99,
  },
  selectedShippingRate: null,
};

const shippingSlice = createSlice({
  name: "shipping",
  initialState,
  reducers: {
    updateShippingRate(state, { payload }) {
      state.selectedShippingRate = state.rates[payload];
    },
  },
});

export default shippingSlice.reducer;
export const { updateShippingRate } = shippingSlice.actions;

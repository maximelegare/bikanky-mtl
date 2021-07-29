import { createSelector } from "reselect";

const selectShippingInitialState = (state) => state.shipping;

export const selectShippingRates = createSelector(
  [selectShippingInitialState],
  (shipping) => {
    return shipping.rates;
  }
);

export const selectShippingPricing = createSelector(
  [selectShippingInitialState],
  (shipping) => {
      console.log(shipping)
      return shipping.selectedShippingRate}
);

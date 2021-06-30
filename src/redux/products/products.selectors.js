import { createSelector } from "reselect";

const selectProductsInitialState = (state) => state.products.initialState;

export const selectProductsCategories = createSelector(
  [selectProductsInitialState],
  (initialState) =>  {
    
    return initialState.productsCategories}
);




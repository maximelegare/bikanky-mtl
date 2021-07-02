import { createSelector } from "reselect";
import { memoize } from "lodash";

const selectProductsInitialState = (state) => state.products.initialState;

export const selectProductsCategories = createSelector(
  [selectProductsInitialState],
  (initialState) => {
    return initialState.productsCategories;
  }
);

export const selectCategory = memoize((categoryUrlParam) =>
  createSelector([selectProductsCategories], (productsCategories) =>
    productsCategories ? productsCategories[categoryUrlParam] : null
  )
);

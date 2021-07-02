import { createSelector } from "reselect";
import { memoize } from "lodash";

const selectItemsInitialState = (state) => state.products.initialState;

export const selectItemsCategories = createSelector(
  [selectItemsInitialState],
  (initialState) => {
    return initialState.itemsCategories;
  }
);

export const selectCategory = memoize((categoryUrlParam) =>
  createSelector([selectItemsCategories], (itemsCategories) =>
    itemsCategories ? itemsCategories[categoryUrlParam] : null
  )
);

export const selectItem = memoize((urlParams) =>
  createSelector([selectItemsCategories], (itemsCategories) =>
    itemsCategories
      ? itemsCategories[urlParams.category].items.filter(
          (item) => item.routeName === urlParams.item
        )
      : null
  )
);

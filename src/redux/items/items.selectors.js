import { createSelector } from "reselect";
import { memoize } from "lodash";

const selectItemsInitialState = (state) => state.items;

export const selectFetchItemsLoading = createSelector(
  [selectItemsInitialState],
  (items) => {
    console.log(items.isLoading);
    return items.isLoading;
  }
);

export const selectItemsCategories = createSelector(
  [selectItemsInitialState],
  (items) => {
    console.log(items.itemsCategories);
    return items.itemsCategories ? items.itemsCategories : {};
  }
);

export const selectCategory = memoize((categoryUrlParam) =>
  createSelector([selectItemsCategories], (itemsCategories) =>
    itemsCategories ? itemsCategories[categoryUrlParam] : {}
  )
);

export const selectItem = memoize((urlParams) =>
  createSelector([selectItemsCategories], (itemsCategories) =>
    itemsCategories
      ? itemsCategories[urlParams.category].items.filter(
          (item) => item.routeName === urlParams.item
        )
      : {}
  )
);

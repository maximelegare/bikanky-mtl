import { createSelector } from "reselect";
import { memoize } from "lodash";

const selectItemsInitialState = (state) => state.items;

export const selectFetchItemsLoading = createSelector(
  [selectItemsInitialState],
  (items) => {
    return items.isLoading;
  }
);

export const selectItemsCategories = createSelector(
  [selectItemsInitialState],
  (items) => {
    return items.itemsCategories ? items.itemsCategories : {};
  }
);

export const selectCategory = memoize((categoryUrlParam) => {
  console.log(categoryUrlParam);
  return createSelector([selectItemsCategories], (itemsCategories) => {
    console.log(itemsCategories);
    return itemsCategories ? itemsCategories[categoryUrlParam] : {};
  });
});

export const selectCategoryItemsTest = createSelector(
  (state) => state.items,
  (_, category) => category, // this is the parameter we need
  (state, category) =>
    state.itemsCategories ? state.itemsCategories[category] : {}
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

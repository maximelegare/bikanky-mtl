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

// select item based on the urlParam (used in shop section)
export const selectItem = memoize((urlParams) =>
  createSelector([selectItemsCategories], (itemsCategories) =>
    itemsCategories
      ? itemsCategories[urlParams.category]
      : // .items.filter(
        //   (item) => item.routeName === urlParams.item
        // )
        {}
  )
);

// select the category based on url param (used in shop section)
export const selectCategory = memoize((categoryUrlParam) =>
  createSelector([selectItemsCategories], (itemsCategories) =>
    itemsCategories ? itemsCategories[categoryUrlParam] : {}
  )
);

///////////////////// HOOKS ///////////////////////

// select item category based on the category parameter received (used with hooks in admin section)
export const selectCategoryItemsTest = createSelector(
  (state) => state.items,
  (_, category) => category, // this is the parameter we need
  (state, category) =>
    state.itemsCategories && category ? state.itemsCategories[category] : {}
);

// select the item based on the category and item received (used with hooks in admin section)
export const selectItemTest = createSelector(
  (state) => state.items,
  (_, params) => params,
  (state, params) =>
    state.itemsCategories && params.category && params.category
      ? state.itemsCategories[params.category].items[params.item]
      : {}
);

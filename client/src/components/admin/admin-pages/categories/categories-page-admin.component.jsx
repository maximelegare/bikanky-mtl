// Categories pages. it's rendered inside the admin page when the user select the link categories in the side-bar-admin.
// It's the first layer of the categories section

// the modals for creating new elements are rendered in this component

import React, { useState } from "react";
import { PageMediumMarginsContainer } from "../../../_styling-containers/pages-styling-containers/pages-styling-containers.styles";

import { CategoriesFlexWrapperContainer } from "./categories-page-admin.styles";

import AdminItemsModal from "../../../modal/admin-items-modal/admin-items-modal.component";
import AdminCategoryModal from "../../../modal/admin-category-modal/admin-category-modal.component";
// import WithConfirmationModal from "../../../_HOC/with-confirmation-modal/with-confirmation-modal.component";

import AdminCard from "../../admin-card/admin-card.component";
import CategoriesItemSpecification from "./categories-item-specification/categories-item-specification.component";
import { useSelector } from "react-redux";
import {
  selectItemsCategories,
  selectCategoryItemsTest,
  selectItemTest,
} from "../../../../redux/items/items.selectors";

import {
  selectNewItemModalVisibility,
  selectUpdateItemModalVisibility,
} from "../../../../redux/modal-elements-visibility/modal.selector";
import { selectNewCategoryModalVisibility } from "../../../../redux/modal-elements-visibility/modal.selector";

const CategoriesPageAdmin = () => {
  // gets items categories and put all names in an array
  const itemsCategories = useSelector(selectItemsCategories);
  const itemsCategoriesArray = Object.values(itemsCategories).map(
    (item) => item
  );

  // Modals with the confirmation modal (HOC)
  // const AdminCategoryModalWithConfirmation = WithConfirmationModal(AdminCategoryModal)
  // const AdminItemModalWithConfirmation = WithConfirmationModal(AdminItemsModal)

  //   default buttonValue, and value when the button was clicked
  const [categoryButtonValue, setCategoryButtonValue] = useState(null);
  const [itemButtonValue, setItemButtonValue] = useState(null);

  // sets the button value (state) when the button was clicked (it's the value of the button that was clicked)
  const handleClick = (routeName, id, name) => {
    if (name === "newCategory") {
      setCategoryButtonValue(routeName);
    } else {
      console.log("id", id);
      setItemButtonValue(id);
    }
  };

  // select a category based on the button clicked value (the value is in the state)
  const category = useSelector((state) =>
    selectCategoryItemsTest(state, categoryButtonValue)
  );

  //   gets all items's titles from the selected category and create a new array

  //   select item based on the category selected and the button clicked => returns the fist item of array (an object)
  const item = useSelector((state) =>
    selectItemTest(state, {
      category: categoryButtonValue,
      item: itemButtonValue,
    })
  );

  const newItemModalVisibility = useSelector(selectNewItemModalVisibility);
  const newCategoryModalVisibility = useSelector(
    selectNewCategoryModalVisibility
  );
  const updateItemModalVisibility = useSelector(
    selectUpdateItemModalVisibility
  );

  return (
    <>
      <PageMediumMarginsContainer>
        <CategoriesFlexWrapperContainer>
          <AdminCard
            small
            items={itemsCategories}
            handleClick={handleClick}
            currentButton={categoryButtonValue}
            topButton
            modalName="newCategory"
            categoryElement
            modalComponent={
              <AdminCategoryModal
                isVisible={newCategoryModalVisibility}
                modalName="newCategory"
              />
            }
          />
          <AdminCard
            small
            items={category.items}
            handleClick={handleClick}
            currentButton={itemButtonValue}
            topButton
            modalName="newItem"
            modalComponent={
              <AdminItemsModal
                selectInputMenuValues={itemsCategoriesArray}
                isVisible={newItemModalVisibility}
                modalName="newItem"
                newItem
              />
            }
          />
          <AdminCard
            noList
            modalComponent={
              <AdminItemsModal
                isVisible={updateItemModalVisibility}
                item={item}
                modalName="updateItem"
                selectInputMenuValues={itemsCategoriesArray}
                updateItem
              />
            }
          >
            <CategoriesItemSpecification
              item={item}
              selectInputMenuValues={itemsCategoriesArray}
              modalName="updateItem"
            />
          </AdminCard>
        </CategoriesFlexWrapperContainer>
      </PageMediumMarginsContainer>
    </>
  );
};

export default CategoriesPageAdmin;

// Categories pages. it's rendered inside the admin page when the user select the link categories in the side-bar-admin.
// It's the first layer of the categories section

import React, { useState } from "react";
import { PageMediumMarginsContainer } from "../../../_styling-containers/pages-styling-containers/pages-styling-containers.styles";

import { CategoriesFlexWrapperContainer } from "./categories-page-admin.styles";

import AdminCard from "../../admin-card/admin-card.component";
import CategoriesItemSpecification from "./categories-item-specification/categories-item-specification.component";
import { useSelector } from "react-redux";
import {
  selectItemsCategories,
  selectCategoryItemsTest,
  selectItemTest,
} from "../../../../redux/items/items.selectors";
import AdminItemsModal from "../../../modal/admin-items-modal/admin-items-modal.component";

const CategoriesPageAdmin = () => {
  // gets items categories and put all names in an array
  const itemsCategories = useSelector(selectItemsCategories);
  const itemsCategoriesArray = Object.values(itemsCategories).map(
    (category) => category
  );

  //   default buttonValue, and value when the button was clicked
  const [categoryButtonValue, setCategoryButtonValue] = useState("");
  const [itemButtonValue, setItemButtonValue] = useState("");

  // sets the button value (state) when the button was clicked (it's the value of the button that was clicked)
  const handleClick = (e) => {
    setCategoryButtonValue(e.target.value);
  };

  const handleItemClick = (e) => {
    setItemButtonValue(e.target.value);
  };

  // select a category based on the button clicked value (the value is in the state)
  const category = useSelector((state) =>
    selectCategoryItemsTest(state, categoryButtonValue)
  );

  //   select item based on the category selected and the button clicked => returns the fist item of array (an object)
  const item = useSelector((state) =>
    selectItemTest(state, {
      category: categoryButtonValue,
      item: itemButtonValue,
    })
  )[0];

  //   gets all items's titles from the selected category and create a new array
  const itemsCategoryArray = category.items?.map((item) => item);

  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <>
      <AdminItemsModal
        isVisible={modalVisibility}
        item={item}
        setVisibility={setModalVisibility}
      />
      <PageMediumMarginsContainer>
        <CategoriesFlexWrapperContainer>
          <AdminCard
            small
            items={itemsCategoriesArray}
            handleClick={handleClick}
            currentButton={categoryButtonValue}
          />
          <AdminCard
            small
            items={itemsCategoryArray}
            handleClick={handleItemClick}
            currentButton={itemButtonValue}
          />
          <AdminCard itemSpecification>
            <CategoriesItemSpecification item={item} />
          </AdminCard>
        </CategoriesFlexWrapperContainer>
      </PageMediumMarginsContainer>
    </>
  );
};

export default CategoriesPageAdmin;

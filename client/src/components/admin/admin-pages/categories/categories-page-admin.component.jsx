/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { PageMediumMarginsContainer } from "../../../_styling-containers/pages-styling-containers/pages-styling-containers.styles";

import { CategoriesFlexWrapperContainer } from "./categories-page-admin.styles";

import AdminCard from "../../admin-card/admin-card.component";

import { useSelector } from "react-redux";
import {
  selectItemsCategories,
  selectCategoryItemsTest,
  selectItemTest,
} from "../../../../redux/items/items.selectors";

const CategoriesPageAdmin = () => {
  var lastClickedCategory = "";
  var lastClickedItem = "";

  // gets items categories and put all names in an array
  const itemsCategories = useSelector(selectItemsCategories);
  const itemsCategoriesArray = Object.values(itemsCategories).map(
    (category) => category
  );

  //   default buttonValue, and value when the button was clicked
  const [categoryButtonValue, setCategoryButtonValue] = useState("");
  const [itemButtonValue, setItemButtonValue] = useState("");
  // changes the buttonValue to the one clicked


  // handle click event on button
  const handleClick = (e) => {
    setCategoryButtonValue(e.target.value);
  };


  const handleItemClick = (e) => {
    console.log(e.target.value);
    setItemButtonValue(e.target.value);
  };



  // select a category based on the button clicked value
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

  return (
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
          <div>{item?.title}</div>
        </AdminCard>
      </CategoriesFlexWrapperContainer>
    </PageMediumMarginsContainer>
  );
};

export default CategoriesPageAdmin;

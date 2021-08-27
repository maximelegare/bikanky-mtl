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
  // gets items categories and put all names in an array
  const itemsCategories = useSelector(selectItemsCategories);
  const itemsCategoriesArray = Object.values(itemsCategories).map(
    (category) => category.title
  );

  //   default buttonValue, and value when the button was clicked
  const [categoryButtonValue, setCategoryButtonValue] = useState("sneakers");
  const [itemButtonValue, setItemButtonValue] = useState("timberlands");
  // changes the buttonValue to the one clicked


  // handle click event on button 
  const handleClick = (e) => {
    setCategoryButtonValue(e.target.value);
  };

  const handleItemClick = (e) => {
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

  console.log(category, itemButtonValue, item);
  //   gets all items's titles from the selected category and create a new array
  const itemsCategoryTitlesArray = category.items?.map((item) => item.title);

  return (
    <PageMediumMarginsContainer>
      <CategoriesFlexWrapperContainer>
        <AdminCard
          small
          titles={itemsCategoriesArray}
          handleClick={handleClick}
        />
        <AdminCard
          small
          titles={itemsCategoryTitlesArray}
          handleClick={handleItemClick}
        />
        <AdminCard item={item}></AdminCard>
      </CategoriesFlexWrapperContainer>
    </PageMediumMarginsContainer>
  );
};

export default CategoriesPageAdmin;

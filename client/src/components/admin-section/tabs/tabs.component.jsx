import React from "react";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import { selectCategory } from "../../../redux/items/items.selectors";
import { selectItemsCategories } from "../../../redux/items/items.selectors";
import { TabsWrapperContainer, TabContainer } from "./tabs.styles";

const TabsListContainer = ({ title, params, match }) => {
     
  const categories = useSelector(selectItemsCategories);
  const category = useSelector(selectCategory);

  const selectData = () => {
    switch (match.params[params]) {
      case "admin":
          return title  
      case "categories":
        return categories;
      case "category":
        return category;
      default:
        return categories;
    }
  };

  console.log(selectData());

  return (
    <>
      <TabsWrapperContainer>
        {Object.values(categories).map((category) => (
          <TabContainer
            to={`${match.url}/${category.title.toLowerCase()}`}
            key={category.title}
          >
            {category.title}
          </TabContainer>
        ))}
      </TabsWrapperContainer>
    </>
  );
};

export default withRouter(TabsListContainer);

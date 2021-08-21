import React from "react";
import TabsListContainer from "./tabs/tabs.component";
import {
  AdminWrapperContainer,
  TabsPositionningContainer,
} from "./admin-section.styles";
import { selectItemsCategories } from "../../redux/items/items.selectors";
import { useSelector } from "react-redux";
import { Route } from "react-router";

import { withRouter } from "react-router";

const AdminSection = ({ location, match }) => {
  const itemsCategories = useSelector(selectItemsCategories);
  const itemsCategoriesArray = Object.values(itemsCategories).map(
    (item) => item.title
  );

  console.log(location);

  return (
    <AdminWrapperContainer>
      <TabsPositionningContainer exact basis={10}>
        <Route path={match.path}>
          <TabsListContainer
            titles={["Categories", "Services", "Users", "Shipping", "Orders"]}
            params="admin"
          />
        </Route>
      </TabsPositionningContainer>

      <TabsPositionningContainer basis={10}>
        <Route
          path={`${match.path}/:tab`}
          render={() => <TabsListContainer titles={itemsCategoriesArray} params="tab"/>}
        />
      </TabsPositionningContainer>
      <TabsPositionningContainer basis={10}>
        <Route
          path={`${match.url}/:tab/:items`}
          render={() => <TabsListContainer titles={itemsCategoriesArray} params="items"/>}
        />
      </TabsPositionningContainer>
      <TabsPositionningContainer basis={50}>
        <TabsListContainer />
      </TabsPositionningContainer>
    </AdminWrapperContainer>
  );
};

export default withRouter(AdminSection);

/* eslint-disable react/prop-types */
import React from "react";
import { Route } from "react-router-dom";
import CollectionItemsOverview from "../../components/items/collection-items-overview/collection-items-overview.component";

import { ShopPageContainer } from "./shop-page.styles";
import ItemsPreview from "../../components/items/items-preview/items-preview.component";
// import CollectionPage from '../collection-page/collection-page.component'



const ShopPage = ({ match }) => {
  return (
    <ShopPageContainer>
      <Route exact path={`${match.path}`} component={ItemsPreview} />
      <Route
        path={`${match.path}/:category`}
        component={CollectionItemsOverview}
      />
    </ShopPageContainer>
  );
};

export default ShopPage;

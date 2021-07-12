/* eslint-disable react/prop-types */
import React from "react";
import { Route } from "react-router-dom";


import ItemSpecifications from '../../components/items/item-specifications/item-specifications.component';
import CollectionItemsOverview from "../../components/items/items-overview/items-overview.component";
import { ShopPageContainer } from "./shop-page.styles";
import ItemsPreview from "../../components/items/items-preview/items-preview.component";
// import CollectionPage from '../collection-page/collection-page.component'

const ShopPage = ({ match }) => {

  

  return (
    <ShopPageContainer >
      <Route exact path={`${match.path}`} component={ItemsPreview}/>
      <Route
        exact
        path={`${match.path}/:category`}
        component={CollectionItemsOverview}
      />
      <Route
        exact
        path={`${match.path}/:category/:item`}
        component={ItemSpecifications}
      />
    </ShopPageContainer>
  );
};

export default ShopPage;

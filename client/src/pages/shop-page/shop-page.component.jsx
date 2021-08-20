/* eslint-disable react/prop-types */
import React from "react";
import { Route } from "react-router-dom";


import ItemSpecifications from '../../components/items/item-specifications/item-specifications.component';
import CollectionItemsOverview from "../../components/items/items-overview/items-overview.component";
import ItemsPreview from "../../components/items/items-preview/items-preview.component";
import { PageWrapperContainer } from "../../components/_styling-containers/pages-styling-containers/pages-styling-containers.styles";


const ShopPage = ({ match }) => {

  

  return (
    <PageWrapperContainer >
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
    </PageWrapperContainer>
  );
};

export default ShopPage;

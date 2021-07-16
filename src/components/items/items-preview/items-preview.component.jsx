// The Items-preview is a grid in creationPage to show multiple categories (contain only some products)

/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

import { PageMediumMarginsContainer } from "../../_styling-containers/pages-styling-containers/pages-styling-containers.styles";
import {
  TitleContainer,
  TitleWrapperContainer,
} from "./items-preview.styles";

import { ItemsListContainer } from "../../_styling-containers/pages-styling-containers/pages-styling-containers.styles";

import Item from "../item-card/item-card.component";
import { createStructuredSelector } from "reselect";
import { selectItemsCategories } from "../../../redux/items/items.selectors";
import TopImageSection from "../../top-image-section/top-image-section.component";
import { withRouter } from "react-router-dom";

const ItemsPreview = ({ itemsCategories, history }) => {
  // console.log(productsCategories)
  return (
    <div>
      <TopImageSection type="with-title">Créations</TopImageSection>

      {/* select all categories and map */}
      {Object.values(itemsCategories).map(({ id, title, items, linkUrl }) => (
        <PageMediumMarginsContainer key={id}>
          <TitleWrapperContainer>
            <TitleContainer onClick={() => history.push(linkUrl)}>
              {title.toUpperCase()}
              <sup>voir&nbsp;plus</sup>
            </TitleContainer>
            <hr />
          </TitleWrapperContainer>
          <ItemsListContainer>
            {/* select items, filter only four items, then map */}
            {items
              .filter((item, idx) => idx < 4)
              .map((item) => (
                <Item key={item.id} item={item}></Item>
              ))}
          </ItemsListContainer>
        </PageMediumMarginsContainer>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsCategories: selectItemsCategories,
});
export default withRouter(connect(mapStateToProps)(ItemsPreview));

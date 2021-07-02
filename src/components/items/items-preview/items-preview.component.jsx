// The Items-preview is a grid in creationPage to show multiple categories (contain only some products)

/* eslint-disable react/prop-types */
import React from "react";
import {
  ItemsPreviewContainer,
  ItemsListContainer,
  TitleContainer,
} from "./items-preview.styles";
import Item from "../item/item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectProductsCategories } from "../../../redux/products/products.selectors";
import TopImageSection from "../../top-image-section/top-image-section.component";
import { withRouter } from "react-router-dom";

const ItemsPreview = ({ productsCategories, history }) => {
  // console.log(productsCategories)
  return (
    <div>
      <TopImageSection>CRÉATIONS</TopImageSection>

      {/* select all categories and map */}
      {Object.values(productsCategories).map(({ id, title, items, linkUrl }) => (
        <ItemsPreviewContainer key={id}>
          <TitleContainer onClick={() => history.push(linkUrl)}>{title.toUpperCase()}</TitleContainer>
          <ItemsListContainer>
            {/* select items, filter only four items, then map */}
            {items
              .filter((item, idx) => idx < 4)
              .map((item) => (
                <Item key={item.id} item={item}></Item>
              ))}
          </ItemsListContainer>
        </ItemsPreviewContainer>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  productsCategories: selectProductsCategories,
});
export default withRouter(connect(mapStateToProps)(ItemsPreview));

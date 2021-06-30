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

const ItemsPreview = ({ productsCategories }) => {
  // console.log(productsCategories)
  return (
    <div>
      {productsCategories.map(({ id, title, items }) => (
        <ItemsPreviewContainer key={id}>
          <TitleContainer>{title.toUpperCase()}</TitleContainer>
          <ItemsListContainer>
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
export default connect(mapStateToProps)(ItemsPreview);

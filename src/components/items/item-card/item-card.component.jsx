/* eslint-disable react/prop-types */

import React from "react";
import { withRouter } from "react-router-dom";

import { ProductImgContainer } from '../../_styling-containers/img-styling-container/img-styling-containers.styles'

import {
  ItemWrapperContainer,
  ProductInfosContainer,
  ProductTextContainer,
  ProductPriceButtonContainer,
  PriceNameContainer,
} from "./item-card.styles";

// import PropTypes from "prop-types";
import IconButton from "../../buttons/icon-button.component";

const ItemCard = ({ item, history, location }) => {
  const { imageUrl, title, price, linkUrl } = item;
  return (
    <ItemWrapperContainer
      onClick={() =>
        location.pathname === "/creations"
          ? history.push(`creations/${linkUrl}`)
          : history.push(linkUrl)
      }
    >
      <ProductImgContainer type="card-image" image={imageUrl}></ProductImgContainer>
      <ProductInfosContainer>
        <ProductTextContainer></ProductTextContainer>
        <ProductPriceButtonContainer>
          <PriceNameContainer>
            <div>
              <h2>{title}</h2>
              <h4>{`${price.toFixed(2)}`}&thinsp;$</h4>
            </div>
          </PriceNameContainer>
          <IconButton icon="add_shopping_cart" />
        </ProductPriceButtonContainer>
      </ProductInfosContainer>
    </ItemWrapperContainer>
  );
};

export default withRouter(ItemCard);

/* eslint-disable react/prop-types */

import React from "react";
import {
  ItemWrapperContainer,
  ProductImgContainer,
  ProductInfosContainer,
  ProductTextContainer,
  ProductPriceButtonContainer,
  PriceNameContainer,
} from "./item.styles";
// import PropTypes from "prop-types";
import IconButton from "../../buttons/icon-button.component";

const Item = (props) => {
  const { imageUrl, name, price } = props.item;
  return (
    <ItemWrapperContainer>
      <ProductImgContainer image={imageUrl}></ProductImgContainer>
      <ProductInfosContainer>
        <ProductTextContainer></ProductTextContainer>
        <ProductPriceButtonContainer>
          <PriceNameContainer>
            <div>
              <h2>{name}</h2>
            <h4>{`$${price}`}</h4>
            </div>
          </PriceNameContainer>
          <IconButton icon="add_shopping_cart" />
        </ProductPriceButtonContainer>
      </ProductInfosContainer>
    </ItemWrapperContainer>
  );
};

// Item.propTypes = {
//   id: PropTypes.string,
//   name: PropTypes.string,
//   description: PropTypes.string,
//   price: PropTypes.number,
// };

export default Item;

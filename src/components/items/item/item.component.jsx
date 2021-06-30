/* eslint-disable react/prop-types */

import React from "react";
import {
  ItemWrapperContainer,
  ProductImgContainer,
  ProductInfosContainer,
  ProductTextContainer,
  ProductPriceButtonContainer
} from "./item.styles";
// import PropTypes from "prop-types";

const Item = (props) => {
  const {imageUrl} = props.item
  return (
    <ItemWrapperContainer>
      <ProductImgContainer image={imageUrl}>
      </ProductImgContainer>
      <ProductInfosContainer>
         <ProductTextContainer></ProductTextContainer> 
         <ProductPriceButtonContainer></ProductPriceButtonContainer>
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

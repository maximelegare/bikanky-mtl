import React from "react";

import { PropTypes } from 'prop-types'

import {
  CheckoutCartItemWrapperContainer,
  ProductInfosWrapperContainer,
  ProductInfosContainer,
  InfosContainer,
  NumberContainer,
  TextContainer,
  QuantityWrapperContainer,
  PriceContainer,
  ButtonContainer,
} from "./checkout-cart-item.styles";
import { ImageContainer } from "./checkout-cart-item.styles";
const CheckoutCartItem = ({cartItem}) => {
  const { title, price, cartQuantity, shortDescription } = cartItem  
  return (
    <CheckoutCartItemWrapperContainer>
      <ProductInfosWrapperContainer>
        <ProductInfosContainer>
          <ImageContainer image="https://i.ibb.co/ZYW3VTp/brown-brim.png" />
          <InfosContainer>
            <TextContainer>
              <h4 className="title">{title}</h4>
              <h5>
                {shortDescription}
              </h5>
              <PriceContainer>{price.toFixed(2)}&thinsp;$</PriceContainer>
            </TextContainer>
          </InfosContainer>
        </ProductInfosContainer>
        <QuantityWrapperContainer>
          <NumberContainer>
            <span className="material-icons">remove_circle</span>
            <h4>{cartQuantity}</h4>
            <span className="material-icons">add_circle</span>
          </NumberContainer>
          <ButtonContainer>Delete</ButtonContainer>
        </QuantityWrapperContainer>
      </ProductInfosWrapperContainer>
    </CheckoutCartItemWrapperContainer>
  );
};

CheckoutCartItem.propTypes = {
    cartItem:PropTypes.object  
}


export default CheckoutCartItem;

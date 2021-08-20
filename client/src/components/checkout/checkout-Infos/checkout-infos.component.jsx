import React from "react";

import {
  CheckoutInfosContainer,
  CheckoutStepContainer,
  TitleContainer,
} from "./checkout-infos.styles";

import CheckoutAddress from "./checkout-address/checkout-address.component";
import CheckoutCart from "./checkout-cart/checkout-cart.component";
import CheckoutShipping from "./checkout-shipping/checkout-shipping.component";

const CheckoutInfos = () => {
  return (
    <CheckoutInfosContainer>
      <CheckoutStepContainer flex>
        
        <CheckoutAddress />
      </CheckoutStepContainer>
      <hr />
      <CheckoutStepContainer>
        <TitleContainer>1 - Your Cart</TitleContainer>
        <CheckoutShipping />
        <CheckoutCart />
      </CheckoutStepContainer>
    </CheckoutInfosContainer>
  );
};

export default CheckoutInfos;

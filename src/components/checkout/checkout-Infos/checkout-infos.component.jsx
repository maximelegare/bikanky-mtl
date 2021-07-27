import React from "react";

import {
  CheckoutInfosContainer,
  CheckoutStepContainer,
} from "./checkout-infos.styles";

import CheckoutAddress from "./checkout-address/checkout-address.component";
import CheckoutCart from "./checkout-cart/checkout-cart.component";

const CheckoutInfos = () => {   
  return (
    <CheckoutInfosContainer>
      <CheckoutStepContainer flex>
        <CheckoutAddress />
      </CheckoutStepContainer>
      <hr />
      <CheckoutStepContainer>
        <CheckoutCart/>
      </CheckoutStepContainer>
    </CheckoutInfosContainer>
  );
};

export default CheckoutInfos;

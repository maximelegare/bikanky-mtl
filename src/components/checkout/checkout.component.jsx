import React from "react";

import CheckoutPrice from "./checkout-price/checkout-price.component";

import {
  CheckoutSectionContainer,
  SectionCardContainer,
} from "./checkout.styles";

const CheckoutSection = () => {
  return (
    <CheckoutSectionContainer>
      <SectionCardContainer flex="6">
      </SectionCardContainer>
      <SectionCardContainer  width="300px">
          <CheckoutPrice/>
      </SectionCardContainer>
    </CheckoutSectionContainer>
  );
};

export default CheckoutSection;

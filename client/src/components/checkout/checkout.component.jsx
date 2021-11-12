// main section where all the components of the checkout page are rendered

import React from "react";
import CheckoutPrice from "./checkout-price/checkout-price.component";
import CheckoutInfos from "./checkout-Infos/checkout-infos.component";
import {
  CheckoutSectionContainer,
  SectionCardContainer,
} from "./checkout.styles";

const CheckoutSection = () => {
  return (
    <>
      <CheckoutSectionContainer>
        <SectionCardContainer className="infos" flex="6" >
          <CheckoutInfos />
        </SectionCardContainer>
        <SectionCardContainer className="price" width="300px" height="320px">
          <CheckoutPrice />
        </SectionCardContainer>
      </CheckoutSectionContainer>
    </>
  );
};

export default CheckoutSection;

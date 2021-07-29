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
        <SectionCardContainer flex="6">
          <CheckoutInfos />
        </SectionCardContainer>
        <SectionCardContainer width="300px" height="320px">
          <CheckoutPrice />
        </SectionCardContainer>
      </CheckoutSectionContainer>
    </>
  );
};

export default CheckoutSection;

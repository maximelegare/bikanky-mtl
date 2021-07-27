import React from "react";

import {
  RightSectionContainer,
  TitleContainer,
  AddressContainer,
  ButtonContainer,
} from "./checkout-address.styles";

const CheckoutAddress = () => {
  return (
    <>
      <RightSectionContainer>
        <TitleContainer>1 - Shipping Address</TitleContainer>
        <AddressContainer>
          <h5>Maxime Legare</h5>
          <h5>136 rue Westhill</h5>
          <h5>Saint-Bruno, Quebec J3V 1N6</h5>
        </AddressContainer>
      </RightSectionContainer>
      <ButtonContainer>Edit Adress</ButtonContainer>
    </>
  );
};

export default CheckoutAddress;

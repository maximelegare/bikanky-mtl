import React from "react";
import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";
import CheckoutTable from "./checkout-table/checkout-table.component";
import {
  ButtonContainer,
  CheckoutPriceContainer,
  OrderTable,
  CheckoutTotalContainer,
  TotalContainer
} from "./checkout-price.styles";

const CheckoutPrice = () => {
  return (
    <CheckoutPriceContainer>
      <ButtonContainer>
        <CustomButtonMUI>Continu to Paiment</CustomButtonMUI>
      </ButtonContainer>
      <hr />
      <OrderTable>
        <CheckoutTable />
      </OrderTable>
      <hr />
      <CheckoutTotalContainer>
        <TotalContainer>Order Total: </TotalContainer> 
        <TotalContainer>200.00$</TotalContainer> 
      </CheckoutTotalContainer>
    </CheckoutPriceContainer>
  );
};

export default CheckoutPrice;

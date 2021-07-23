import React from "react";
import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";
import CheckoutTable from "./checkout-table/checkout-table.component";
import {
  ButtonContainer,
  CheckoutPriceContainer,
  OrderTable,
  CheckoutTotalContainer,
} from "./checkout-price.styles";

const CheckoutPrice = () => {
  return (
    <CheckoutPriceContainer>
      <ButtonContainer>
        <CustomButtonMUI>Place your Order</CustomButtonMUI>
      </ButtonContainer>
      <hr />
      <OrderTable>
        <CheckoutTable />
      </OrderTable>
      <hr />
      <CheckoutTotalContainer>
          
      </CheckoutTotalContainer>
    </CheckoutPriceContainer>
  );
};

export default CheckoutPrice;

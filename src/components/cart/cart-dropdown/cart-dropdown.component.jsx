import React from "react";
import Dropdown from "../../drop-down/drop-down.component";

import "simplebar/src/simplebar.css";

import {
  CartWrapperContainer,
  ButtonWrapperContainer,
  BottomSectionContainer,
  CartContainer,
  TitleContainer,
} from "./cart-dropdown.styles";
import CustomButton from "../../buttons/material-ui/custombutton.component";
import CartItemSection from "../cart-items-section/cartItemsSection.component";
const CartDropdown = ({...props}) => {
  return (
    <Dropdown {...props}>
      <CartWrapperContainer>
        <CartContainer>
          <TitleContainer>
            <h2>Your Cart</h2>
          </TitleContainer>
          <hr />

          <CartItemSection />

          <hr />
        </CartContainer>
        <BottomSectionContainer>
          <ButtonWrapperContainer>
            <CustomButton>Go to Checkout</CustomButton>
          </ButtonWrapperContainer>
        </BottomSectionContainer>
      </CartWrapperContainer>
    </Dropdown>
  );
};

export default CartDropdown;

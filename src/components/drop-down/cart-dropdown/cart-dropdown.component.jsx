import React from "react";
import Dropdown from "../../drop-down/dropdown-bones/drop-down.component";

import {
  CartWrapperContainer,
  ButtonWrapperContainer,
  BottomSectionContainer,
  CartContainer,
  TitleContainer,
} from "./cart-dropdown.styles";
import CustomButton from "../../buttons/material-ui/custombutton.component";
import CartItemsSection from "../../cart/cart-items-section/cartItemsSection.component";
const CartDropdown = ({ ...props }) => {
  
 

  return (
    <Dropdown {...props}>
      <CartWrapperContainer>
        <CartContainer>
          <TitleContainer>
            <h2>Your Cart</h2>
          </TitleContainer>
          <hr />

          <CartItemsSection />

          <hr />
        </CartContainer>
        <BottomSectionContainer>
          <ButtonWrapperContainer>
            <CustomButton kind="link" routeName="/checkout" name="cart">
              Go to Checkout
            </CustomButton>
          </ButtonWrapperContainer>
        </BottomSectionContainer>
      </CartWrapperContainer>
    </Dropdown>
  );
};

export default CartDropdown;

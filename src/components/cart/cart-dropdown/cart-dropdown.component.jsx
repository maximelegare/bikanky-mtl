/* eslint-disable react/prop-types */
import React from "react";
import Dropdown from "../../drop-down/drop-down.component";


import "simplebar/src/simplebar.css";

import {
  CartDDContainerDimensions,
  ButtonWrapperContainer,
  BottomSectionContainer,
  CartContainer,
  TitleContainer,
  
} from "./cart-dropdown.styles";

import CustomButton from "../../buttons/custombutton.component";
import CartItemSection from "../cart-items-section/cartItemsSection.component";
const CartDropdown = ({ margin }) => {
 
  

  return (
    <Dropdown margin={margin}>
      <CartDDContainerDimensions>
        <CartContainer>
          <TitleContainer>
            <h2>Your Cart</h2>
          </TitleContainer>
          <hr />

          <CartItemSection/>          

          <hr />
        </CartContainer>
        <BottomSectionContainer>
          <ButtonWrapperContainer>
            <CustomButton>Go to Checkout</CustomButton>
          </ButtonWrapperContainer>
        </BottomSectionContainer>
      </CartDDContainerDimensions>
    </Dropdown>
  );
};

export default CartDropdown;

/* eslint-disable react/prop-types */
import React from "react";
import Dropdown from "../../drop-down/drop-down.component";
import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item.component";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../../redux/cart/cart.selectors";

import "simplebar/src/simplebar.css";

import {
  CartDDContainerDimensions,
  ButtonWrapperContainer,
  BottomSectionContainer,
  CartContainer,
  TitleContainer,
  CartItemsSectionContainer,
  EmptyCartMessage
} from "./cart-dropdown.styles";

import CustomButton from "../../buttons/custombutton.component";

const CartDropdown = ({ margin }) => {
  const cartItems = useSelector(selectCartItems);
  

  return (
    <Dropdown margin={margin}>
      <CartDDContainerDimensions>
        <CartContainer>
          <TitleContainer>
            <h2>Your Cart</h2>
          </TitleContainer>
          <hr />

          <CartItemsSectionContainer>
            {cartItems.length ?
            cartItems.map(({ id, ...otherProps }) => (
              <CartDropdownItem key={id} id={id}  {...otherProps} />
            ))
          :
          (<EmptyCartMessage>Your Cart is empty</EmptyCartMessage>)
          }
          </CartItemsSectionContainer>

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

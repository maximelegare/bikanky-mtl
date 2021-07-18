import React from "react";
import Dropdown from "../../drop-down/dropdown-bones/drop-down.component";

import { useDispatch } from "react-redux";
import { toggleClickDropdownVisibility } from "../../../redux/dropdown-elements-visibility/dropdown.slice";
import { toggleHoverDropdownVisibility } from "../../../redux/dropdown-elements-visibility/dropdown.slice";

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
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      toggleClickDropdownVisibility({ dropdownName: "cart", value: false })
    );
    dispatch(
      toggleHoverDropdownVisibility({ dropdownName: "cart", value: false })
    );
  };

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
          <ButtonWrapperContainer onClick={() => handleClick()}>
            <CustomButton
              type="button"
              kind="link"
              routeName="/checkout"
              name="cart"
            >
              Go to Checkout
            </CustomButton>
          </ButtonWrapperContainer>
        </BottomSectionContainer>
      </CartWrapperContainer>
    </Dropdown>
  );
};

export default CartDropdown;

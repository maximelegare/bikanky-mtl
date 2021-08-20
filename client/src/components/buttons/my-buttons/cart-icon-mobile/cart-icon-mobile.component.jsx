import React from "react";
import CartIcon from "../cart-icon/cart-icon.component";
import { CartIconContainer } from "./cart-icon-mobile.styles";
import { toggleSliderVisibility } from "../../../../redux/side-slider/side-slider.slice";
import { useDispatch } from "react-redux";


const CartIconMobile = () => {

  const dispatch = useDispatch()  
  return (
    <CartIconContainer onClick={() => dispatch(toggleSliderVisibility())}>
      <CartIcon />
    </CartIconContainer>
  );
};

export default CartIconMobile;

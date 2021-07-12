import React from "react";
import CartItemsSection from "../cart-items-section/cartItemsSection.component";
import {SliderCartContainer} from "./cart-slider-mobile.styles";

const CartSideSliderMobile = () => {
  return (
    <SliderCartContainer>
      <h4>Cart</h4>
      <CartItemsSection sideSlider />
    </SliderCartContainer>
  );
};

export default CartSideSliderMobile;

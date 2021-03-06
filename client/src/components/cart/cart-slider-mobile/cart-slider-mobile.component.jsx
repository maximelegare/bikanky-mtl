// cart section only visible on mode (it's on a sideSlider)

import React from "react";
import CartItemsSection from "../cart-items-section/cartItemsSection.component";
import {SliderCartContainer} from "./cart-slider-mobile.styles";

const CartSideSliderMobile = () => {
  return (
    <SliderCartContainer>
      <h4>Votre panier&thinsp;:</h4>
      <h5>Swipe left to delete</h5>
      <CartItemsSection sideSlider />
    </SliderCartContainer>
  );
};

export default CartSideSliderMobile;

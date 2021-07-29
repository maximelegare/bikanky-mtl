import React from "react";

import CheckoutCartItem from "./checkout-cart-item/checkout-cart-item.component";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../../redux/cart/cart.selectors";

import {
  CheckoutCartContainerWrapper,
  CheckoutListContainer,
} from "./checkout-cart.styles";


const CheckoutCart = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <CheckoutCartContainerWrapper>
      

      <CheckoutListContainer>
        {cartItems.map((cartItem) => (
          <CheckoutCartItem key={cartItem.id} cartItem={cartItem}/>
        ))}
        {/* <CheckoutCartItem /> */}
      </CheckoutListContainer>
    </CheckoutCartContainerWrapper>
  );
};

export default CheckoutCart;

// section where all the cart items are rendered
// it receives a sideSlider Bool to know if it's used there or not

import {PropTypes} from 'prop-types'
import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../../redux/cart/cart.selectors";

import CartDropdownItem from "../cart-item/cart-item.component";
import {
  CartItemsSectionContainer,
  EmptyCartMessage,
} from "./cartItemsSection.styles";

const CartItemsSection = ({ sideSlider }) => {

  const cartItems = useSelector(selectCartItems);

  return (
    <CartItemsSectionContainer sideSlider={sideSlider}>
      {cartItems.length ? (
        cartItems.map(({ id, ...otherProps }) => (
          <CartDropdownItem
            sideSlider={sideSlider}
            key={id}
            id={id}
            {...otherProps}
          />
        ))
      ) : (
        <EmptyCartMessage className="empty-message" sideSlider={sideSlider}>
          Your Cart is empty
        </EmptyCartMessage>
      )}
    </CartItemsSectionContainer>
  );
};

CartItemsSection.propTypes = {
  sideSlider:PropTypes.bool
}


export default CartItemsSection;

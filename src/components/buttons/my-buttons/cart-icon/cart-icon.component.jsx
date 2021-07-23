import React from "react";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../../../redux/cart/cart.selectors";
import {
  CartIconContainer,
  CartNumberContainer,
  NumberContainer,
} from "./cart-icon.styles";

import { PropTypes } from "prop-types";

const CartIcon = () => {
  const cartItemsCount = useSelector(selectCartCount);

  return (
    <CartIconContainer >
      <CartNumberContainer>
        <NumberContainer>{cartItemsCount}</NumberContainer>
      </CartNumberContainer>
      <div className="material-icons" style={{ fontSize: "1.8rem" }}>
        shopping_cart
      </div>
    </CartIconContainer>
  );
};

CartIcon.propTypes = {
  color: PropTypes.string,
};

export default CartIcon;

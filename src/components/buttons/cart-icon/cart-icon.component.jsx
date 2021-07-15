import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCartCount } from "../../../redux/cart/cart.selectors";
import {
  CartIconContainer,
  CartNumberContainer,
  NumberContainer,
} from "./cart-icon.styles";

import { selectCartVisibility } from "../../../redux/dropdown-elements-visibility/dropdown.selector";

import { toggleDropdownVisibility } from "../../../redux/dropdown-elements-visibility/dropdown.slice";

const CartIcon = () => {
  const cartItemsCount = useSelector(selectCartCount);
  const cartVisibility = useSelector(selectCartVisibility);
  const dispatch = useDispatch();
  return (
    <CartIconContainer
      onClick={() =>
        dispatch(
          toggleDropdownVisibility({
            type: "cartVisibility",
            value: !cartVisibility,
          })
        )
      }
    >
      <CartNumberContainer>
        <NumberContainer>{cartItemsCount}</NumberContainer>
      </CartNumberContainer>
      <div className="material-icons" style={{ fontSize: "28px" }}>
        shopping_cart
      </div>
    </CartIconContainer>
  );
};

export default CartIcon;

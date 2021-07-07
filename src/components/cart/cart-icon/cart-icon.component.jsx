import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../../redux/cart/cart.selectors";  
import {
  CartIconContainer,
  CartNumberContainer,
  NumberContainer,
  
} from "./cart-icon.styles";



import { toggleCartVisibility } from "../../../redux/cart/cart.slices";

const CartIcon = () => {
    const cartItemsNumber = useSelector(selectCartItems)
    const dispatch = useDispatch() 
  return (
      <CartIconContainer onClick={() => dispatch(toggleCartVisibility())}>
      {/* <CartIconContainer > */}
        <CartNumberContainer>
          <NumberContainer>{cartItemsNumber.length}</NumberContainer>
        </CartNumberContainer>
        <div className="material-icons" style={{fontSize:'28px'}}>shopping_cart</div>
      </CartIconContainer>
  );
};

export default CartIcon;
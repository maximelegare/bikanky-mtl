import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount } from "../../../redux/cart/cart.selectors";  
import {
  CartIconContainer,
  CartNumberContainer,
  NumberContainer,
  
} from "./cart-icon.styles";




import { toggleCartVisibility } from "../../../redux/cart/cart.slices";

const CartIcon = () => {
    const cartItemsCount = useSelector(selectCartCount)
    console.log(cartItemsCount)
    const dispatch = useDispatch() 
  return (
      <CartIconContainer onClick={() => dispatch(toggleCartVisibility())}>
      {/* <CartIconContainer > */}
        <CartNumberContainer>
          <NumberContainer>{cartItemsCount}</NumberContainer>
        </CartNumberContainer>
        <div className="material-icons" style={{fontSize:'28px'}}>shopping_cart</div>
      </CartIconContainer>
  );
};

export default CartIcon;

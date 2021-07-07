import React from "react";
import { useDispatch } from "react-redux";
import {
  CartIconContainer,
  CartNumberContainer,
  NumberContainer,
  
} from "./cart-icon.styles";

import { toggleCartVisibility } from "../../../redux/cart-dropdown/cart-dropdown.slices";

const CartIcon = () => {
    
    const dispatch = useDispatch() 
  return (
    
      <CartIconContainer onClick={() => dispatch(toggleCartVisibility())}>
        <CartNumberContainer>
          <NumberContainer>29</NumberContainer>
        </CartNumberContainer>
        <div className="material-icons" style={{fontSize:'28px'}}>shopping_cart</div>
      </CartIconContainer>
  );
};

export default CartIcon;

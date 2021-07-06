import React from "react";
import {
  CartIconContainer,
  CartNumberContainer,
  NumberContainer,
  
} from "./cart-icon.styles";

const CartIcon = () => {
  return (
    
      <CartIconContainer>
        <CartNumberContainer>
          <NumberContainer>29</NumberContainer>
        </CartNumberContainer>
        <div className="material-icons" style={{fontSize:'28px'}}>shopping_cart</div>
      </CartIconContainer>

  );
};

export default CartIcon;

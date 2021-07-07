import React from "react";
import './delete-item.styles.scss'


import {
  CartDropdownWrapperContainer,
  ImageContainer,
  CartDropdownContainer,
    DescriptionContainer,
    ItemTitleContainer,
    ItemQuantityAndPriceContainer,
} from "./cart-dropdown-item.styles";

const CartDropdownItem = () => {
  return (
    <CartDropdownWrapperContainer>
      <CartDropdownContainer>
        <ImageContainer image="https://i.ibb.co/ZYW3VTp/brown-brim.png" />
        <DescriptionContainer>
          <ItemTitleContainer>Badinedonpas kbasf skfjh safkjh skjfh zfbb asfkhb </ItemTitleContainer>
          {/* <hr/> */}
          <ItemQuantityAndPriceContainer>4 x 26.00$</ItemQuantityAndPriceContainer>
        </DescriptionContainer>
        <div className="material-icons delete-icon">delete</div>
      </CartDropdownContainer>
    </CartDropdownWrapperContainer>
  );
};

export default CartDropdownItem;

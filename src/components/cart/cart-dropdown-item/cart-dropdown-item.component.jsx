import React from "react";
import "./delete-item.styles.scss";
import { PropTypes } from "prop-types";

import { deleteItemFromCart } from "../../../redux/cart/cart.slices";

import { useDispatch } from "react-redux";

import {
  CartDropdownWrapperContainer,
  ImageContainer,
  CartDropdownContainer,
  DescriptionContainer,
  ItemTitleContainer,
  ItemQuantityAndPriceContainer,
} from "./cart-dropdown-item.styles";

const CartDropdownItem = ({ title, price, imageUrl, id }) => {
  const dispatch = useDispatch();
  console.log(id);
  return (
    <CartDropdownWrapperContainer>
      <CartDropdownContainer>
        <ImageContainer image={imageUrl} />
        <DescriptionContainer>
          <ItemTitleContainer>{title}</ItemTitleContainer>
          {/* <hr/> */}
          <ItemQuantityAndPriceContainer>
            {`5 x ${price.toFixed(2)}`}&thinsp;$
          </ItemQuantityAndPriceContainer>
        </DescriptionContainer>
        <div
          className="material-icons delete-icon"
          onClick={() => dispatch(deleteItemFromCart(id))}
        >
          delete
        </div>
      </CartDropdownContainer>
    </CartDropdownWrapperContainer>
  );
};

CartDropdownItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  id: PropTypes.number,
};

export default CartDropdownItem;

import React from "react";
import "./delete-item.styles.scss";
import { PropTypes } from "prop-types";

import { useSwipeable } from "react-swipeable";

import { deleteItemFromCart } from "../../../redux/cart/cart.slices";

import { useDispatch } from "react-redux";

import {
  CartDropdownWrapperContainer,
  ImageContainer,
  CartDropdownContainer,
  DescriptionContainer,
  CartLeftContainer,
 
} from "./cart-item.styles";

const CartDropdownItem = ({
  title,
  price,
  imageUrl,
  id,
  cartQuantity,
  sideSlider,
}) => {
  const dispatch = useDispatch();

  const handlers = useSwipeable({
    onSwipedLeft: () => dispatch(deleteItemFromCart(id)),
  });

  return (
    <CartDropdownWrapperContainer {...handlers} sideSlider={sideSlider}>
      
      <CartDropdownContainer>
        <CartLeftContainer>
          <ImageContainer image={imageUrl} />
          <DescriptionContainer sideSlider={sideSlider}>
            <h5 className="title">{title}</h5>
            <h5 className="price">
              {`${cartQuantity} x ${price.toFixed(2)}`}&thinsp;$
            </h5>
          </DescriptionContainer>
        </CartLeftContainer>
        {sideSlider ? null : (
          <div
            className="material-icons delete-icon"
            onClick={() => dispatch(deleteItemFromCart(id))}
          >
            delete
          </div>
        )}
      </CartDropdownContainer>
    </CartDropdownWrapperContainer>
  );
};

CartDropdownItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.string,
  id: PropTypes.number,
  cartQuantity: PropTypes.number,
  sideSlider: PropTypes.bool,
};

export default CartDropdownItem;

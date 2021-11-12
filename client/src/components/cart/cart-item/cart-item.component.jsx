// each cart item visible inside of the [cartItemsSection] & [cart-slider-mobile] components
// receives title, price, etc. from the it's parent


import React from "react";
import { PropTypes } from "prop-types";

import { useSwipeable } from "react-swipeable"

import { deleteItemFromCart } from "../../../redux/cart/cart.slices";

import { useDispatch } from "react-redux";

import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";
import CustomButton from "../../buttons/my-buttons/customButtons/custom-button.component";
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
  linkUrl,
}) => {
  const dispatch = useDispatch();

  const handlers = useSwipeable({
    onSwipedLeft: () => dispatch(deleteItemFromCart(id)),
  });

  console.log("imageUrl :", imageUrl.url)
  return (
    <CartDropdownWrapperContainer {...handlers} sideSlider={sideSlider}>
      <CartDropdownContainer>
        <CartLeftContainer>
          <ImageContainer image={imageUrl.url} />
          <DescriptionContainer sideSlider={sideSlider}>
            <div className="title">
              <CustomButton
                title={title}
                kind="text-link"
                linkUrl={`/creations/${linkUrl}`}
              />
            </div>
            <h5 className="price">
              {`${cartQuantity} x ${(price).toFixed(2)}`}&thinsp;$
            </h5>
          </DescriptionContainer>
        </CartLeftContainer>
        {sideSlider ? null : (
          <div onClick={() => dispatch(deleteItemFromCart(id))}>
            <CustomButtonMUI kind="icon" deleteIcon>
              delete
            </CustomButtonMUI>
          </div>
        )}
      </CartDropdownContainer>
    </CartDropdownWrapperContainer>
  );
};

CartDropdownItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  imageUrl: PropTypes.shape({
    url:PropTypes.string
  }),
  id: PropTypes.number,
  cartQuantity: PropTypes.number,
  sideSlider: PropTypes.bool,
  linkUrl: PropTypes.string,
};

export default CartDropdownItem;

import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../../redux/cart/cart.slices";

import {
  FixedWrapperContainer,
  ButtonWrapperContainer,
} from "./add-to-cart-mobile.styles";
import { PropTypes } from "prop-types";

import CustomButtonMUI from "../../../buttons/material-ui/custom-button-mui.component";

const AddToCartMobile = ({ item }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addItemToCart(item));
  };

  return (
    <>
    <div style={{marginTop:'80px'}}></div>  
    <FixedWrapperContainer>
      <ButtonWrapperContainer onClick={handleClick}>
        <CustomButtonMUI >Add to Cart</CustomButtonMUI>
      </ButtonWrapperContainer>
    </FixedWrapperContainer>
    </>
  );
};

AddToCartMobile.propTypes = {
  item: PropTypes.object,
};

export default AddToCartMobile;

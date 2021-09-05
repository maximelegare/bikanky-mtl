import React from "react";

import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import CustomButton from "../../../../buttons/my-buttons/customButtons/custom-button.component";
import {
  cartItemQuantityIncrease,
  cartItemQuantityDecrease,
  deleteItemFromCart,
} from "../../../../../redux/cart/cart.slices";

import {
  CheckoutCartItemWrapperContainer,
  ProductInfosWrapperContainer,
  ProductInfosContainer,
  InfosContainer,
  NumberContainer,
  TextContainer,
  QuantityWrapperContainer,
  PriceContainer,
  ButtonContainer,
  TitleContainer,
} from "./checkout-cart-item.styles";
import { ImageContainer } from "./checkout-cart-item.styles";
const CheckoutCartItem = ({ cartItem }) => {
  const {
    title,
    price,
    cartQuantity,
    shortDescription,
    imageUrl,
    id,
    linkUrl,
  } = cartItem;

  const dispatch = useDispatch();

  const handleClick = (type) => {
    switch (type) {
      case "add":
        dispatch(cartItemQuantityIncrease(cartItem));
        break;
      case "remove":
        dispatch(cartItemQuantityDecrease(cartItem));
        break;
      case "delete":
        dispatch(deleteItemFromCart(id));
        break;
      default:
        dispatch(cartItemQuantityIncrease(cartItem));
        break;
    }
  };

  return (
    <CheckoutCartItemWrapperContainer>
      <TitleContainer>
        <CustomButton
          title={title}
          kind="text-link"
          linkUrl={`/creations/${linkUrl}`}
        />
        <PriceContainer>—&thinsp;{(price.toFixed(2))}&thinsp;$</PriceContainer>
      </TitleContainer>
      <ProductInfosWrapperContainer>
        <ProductInfosContainer>
          <ImageContainer image={imageUrl} />

          <InfosContainer>
            <TextContainer>
              <div>
                <CustomButton
                  title={title}
                  kind="text-link"
                  linkUrl={`/creations/${linkUrl}`}
                />
              </div>
              <h5 className="description">{shortDescription}</h5>
              <PriceContainer>{(price.toFixed(2))}&thinsp;$</PriceContainer>
            </TextContainer>
          </InfosContainer>
        </ProductInfosContainer>
        <QuantityWrapperContainer>
          <NumberContainer>
            <span
              className="material-icons"
              onClick={() => handleClick("remove")}
            >
              remove_circle
            </span>
            <h4>{cartQuantity}</h4>
            <span className="material-icons" onClick={() => handleClick("add")}>
              add_circle
            </span>
          </NumberContainer>
          <ButtonContainer onClick={() => handleClick("delete")}>
            <CustomButton
              kind="text"
              title="Delete"
              color="var(--red-accent)"
            />
          </ButtonContainer>
        </QuantityWrapperContainer>
      </ProductInfosWrapperContainer>
    </CheckoutCartItemWrapperContainer>
  );
};

CheckoutCartItem.propTypes = {
  cartItem: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    cartQuantity: PropTypes.number,
    shortDescription: PropTypes.string,
    imageUrl: PropTypes.string,
    id: PropTypes.number,
    linkUrl: PropTypes.string,
  }),
};

export default CheckoutCartItem;

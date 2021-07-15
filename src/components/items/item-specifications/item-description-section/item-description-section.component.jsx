/* eslint-disable react/prop-types */
import "./bullet-customization.styles.scss";
import React from "react";
import { ItemWrapperContainer } from "../item-specifications.styles";
import CustomButton from "../../../buttons/material-ui/custombutton.component";

// import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../../../../redux/cart/cart.slices";

import {
  TilteContainer,
  TopDescriptionContainer,
  PriceAndAvailabilityContainer,
  ItemWrapperContentContainer,
  PriceContainer,
  StockAvailabilityContainer,
  BulletPointsSectionContainer,
  CustomButtonContainer,
} from "./item-description-section.styles";

const ItemDescription = ({item}) => {

  const dispatch = useDispatch();
  const { title, price, shortDescription, stock, bulletPoints } = item;


  return (
    <ItemWrapperContainer flex="1">
      <ItemWrapperContentContainer>
        <TilteContainer>{title}</TilteContainer>
        <TopDescriptionContainer>{shortDescription}</TopDescriptionContainer>
        <PriceAndAvailabilityContainer>
          <PriceContainer>{`${price.toFixed(2)}`}&thinsp;$</PriceContainer>
          <StockAvailabilityContainer>
            {stock > 0 ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <span className="material-icons">check</span>
                <h4>In Stock</h4>
              </div>
            ) : (
              <h4>Available Soon</h4>
            )}
          </StockAvailabilityContainer>
        </PriceAndAvailabilityContainer>
        <hr />
        <BulletPointsSectionContainer>
          <h4>Details</h4>
          <ul>
            {bulletPoints.map((bullet, index) => (
              <li key={index}>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </BulletPointsSectionContainer>
        <CustomButtonContainer onClick={() => dispatch(addItemToCart(item))}>
          <CustomButton>Add to Cart</CustomButton>
        </CustomButtonContainer>
      </ItemWrapperContentContainer>
    </ItemWrapperContainer>
  );
};

// ItemDescription.propTypes = {
//   title: PropTypes.string,
//   shortDescription: PropTypes.string,
//   bulletPoints: PropTypes.array,
//   price: PropTypes.number,
//   stock: PropTypes.number,
// };

export default ItemDescription;

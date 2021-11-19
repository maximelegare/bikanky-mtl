/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./bullet-customization.styles.scss";
import React from "react";
import { ItemWrapperContainer } from "../item-specifications.styles";
import CustomButtonMUI from "../../../buttons/material-ui/custom-button-mui.component";

// import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";

import { addItemToCart } from "../../../../redux/cart/cart.slices";

import StockAvailability from "../../../stock-availability-icon/stock-availability.component";

import {
  TilteContainer,
  TopDescriptionContainer,
  PriceAndAvailabilityContainer,
  ItemWrapperContentContainer,
  PriceContainer,
  BulletPointsSectionContainer,
  CustomButtonContainer,
} from "./item-description-section.styles";

const ItemDescription = ({item}) => {

  const dispatch = useDispatch();
  
  const { title, price, shortDescription, stock, bulletPoints } = item;


  return (
    <ItemWrapperContainer flex="1">
      <ItemWrapperContentContainer>
        <TilteContainer className="hide-on-mobile">{title}</TilteContainer>
        <TopDescriptionContainer className="hide-on-mobile">{shortDescription}</TopDescriptionContainer>
        <PriceAndAvailabilityContainer className="hide-on-mobile">
          <PriceContainer>{`${(price).toFixed(2)}`}&thinsp;$</PriceContainer>
          <StockAvailability stock={!!stock}/>
        </PriceAndAvailabilityContainer>
        <hr className="hide-on-mobile"/>
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
        <CustomButtonContainer className="hide-on-mobile" 
        // onClick={() => dispatch(addItemToCart(item))}
        >
          <CustomButtonMUI kind="small" disable>Add to Cart</CustomButtonMUI>
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

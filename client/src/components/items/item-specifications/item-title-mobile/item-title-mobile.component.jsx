import React from "react";
import { ItemWrapperContainer } from "../item-specifications.styles";
import { PropTypes } from "prop-types";
import { TitleWrapperContentContainer } from "./item-title-mobile.styles";



import StockAvailability from "../../../stock-availability-icon/stock-availability.component";
import {
  PriceContainer,
  MarginWrapperContainer,
} from "./item-title-mobile.styles";

import { PriceAndStockContainer } from "./item-title-mobile.styles";
import { TopDescriptionContainer } from './item-title-mobile.styles'

const ItemTitleMobile = ({ item }) => {
  const { title, stock, price, shortDescription } = item;

  return (
    <ItemWrapperContainer>
      <MarginWrapperContainer>
        <TitleWrapperContentContainer>
          <div>
            <h2>{title}</h2>
          </div>
          <PriceAndStockContainer>
            <StockAvailability stock={!!stock} />
          </PriceAndStockContainer>
        </TitleWrapperContentContainer>
        <hr style={{ marginBottom: "15px" }} />
        <TopDescriptionContainer>{shortDescription}</TopDescriptionContainer>
        <PriceContainer>{`${(price).toFixed(2)}`}&thinsp;$</PriceContainer>
      </MarginWrapperContainer>
    </ItemWrapperContainer>
  );
};

ItemTitleMobile.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    stock: PropTypes.number,
    price: PropTypes.number,
    shortDescription: PropTypes.string,
  }),
};

export default ItemTitleMobile;

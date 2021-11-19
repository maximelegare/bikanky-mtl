/* eslint-disable no-unused-vars */
import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import { PropTypes } from "prop-types";

import { ProductImgContainer } from "../../_styling-containers/img-styling-container/img-styling-containers.styles";

import {
  ItemWrapperContainer,
  ProductInfosContainer,
  ProductTextContainer,
  ProductPriceButtonContainer,
  PriceNameContainer,
  ButtonWrapperContainer,
} from "./item-card.styles";

// import IconButton from "../../buttons/icon-button.component";
import { addItemToCart } from "../../../redux/cart/cart.slices";
import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";

const ItemCard = ({ item, history, location }) => {
  const { imageUrl, title, price, linkUrl } = item;
  const dispatch = useDispatch();
  
  return (
    <ItemWrapperContainer>
      <ProductImgContainer
        type="card-image"
        image={imageUrl.url}
        onClick={() =>
          location.pathname === "/creations"
            ? history.push(`/creations/${linkUrl}`)
            : history.push(linkUrl)
        }
      />
      <ProductInfosContainer>
        <ProductTextContainer></ProductTextContainer>
        <ProductPriceButtonContainer>
          <PriceNameContainer>
            <div>
              <h3>{title}</h3>
              <h4>{`${(price).toFixed(2)}`}&thinsp;$</h4>
            </div>
          </PriceNameContainer>
          <ButtonWrapperContainer 
          // onClick={() => dispatch(addItemToCart(item))}
          >
            <CustomButtonMUI kind="small" disable>
              <span className="material-icons">add_shopping_cart</span>
            </CustomButtonMUI>
          </ButtonWrapperContainer>
        </ProductPriceButtonContainer>
      </ProductInfosContainer>
    </ItemWrapperContainer>
  );
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.shape({
      url:PropTypes.string,
    }),
    linkUrl: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }),
  history: PropTypes.object,
  location: PropTypes.object,
};

export default withRouter(ItemCard);

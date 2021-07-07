import React from "react";
import { withRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import { PropTypes } from 'prop-types'

import { ProductImgContainer } from "../../_styling-containers/img-styling-container/img-styling-containers.styles";

import {
  ItemWrapperContainer,
  ProductInfosContainer,
  ProductTextContainer,
  ProductPriceButtonContainer,
  PriceNameContainer,
} from "./item-card.styles";

import IconButton from "../../buttons/icon-button.component";
import { addItemToCart } from "../../../redux/cart/cart.slices";


const ItemCard = ({ item, history, location }) => {
  const { imageUrl, title, price, linkUrl } = item;
  const dispatch = useDispatch()
  return (
    <ItemWrapperContainer>
      <ProductImgContainer
        type="card-image"
        image={imageUrl}
        onClick={() =>
          location.pathname === "/creations"
            ? history.push(`creations/${linkUrl}`)
            : history.push(linkUrl)
        }
      ></ProductImgContainer>
      <ProductInfosContainer>
        <ProductTextContainer></ProductTextContainer>
        <ProductPriceButtonContainer>
          <PriceNameContainer>
            <div>
              <h2>{title}</h2>
              <h4>{`${price.toFixed(2)}`}&thinsp;$</h4>
            </div>
          </PriceNameContainer>
          <div onClick={() => dispatch(addItemToCart(item))}>
            <IconButton icon="add_shopping_cart" />
          </div>
        </ProductPriceButtonContainer>
      </ProductInfosContainer>
    </ItemWrapperContainer>
  );
};

ItemCard.propTypes = {
  item: PropTypes.shape({
    imageUrl:PropTypes.string,
    linkUrl:PropTypes.string,
    title:PropTypes.string,
    price:PropTypes.number,
  }),
  history: PropTypes.object,
  location: PropTypes.object,  
}


export default withRouter(ItemCard);

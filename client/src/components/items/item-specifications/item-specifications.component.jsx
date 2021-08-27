/* eslint-disable react/prop-types */

import React from "react";
import "swiper/swiper-bundle.css";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectItem } from "../../../redux/items/items.selectors";

import {
  ItemSpecificationTopContainer,
  ItemContentContainer,
  ItemSpecificationWrapperContainer,
} from "./item-specifications.styles";

import TopImageSection from "../../top-image-section/top-image-section.component";

import CarouselSwiper from "./Item-carousel-section/item-carousel-section.component";
import ItemDescription from "./item-description-section/item-description-section.component";
import ItemTitleMobile from "./item-title-mobile/item-title-mobile.component";
import AddToCartMobile from "./item-add-to-cart-mobile/add-to-cart-mobile.component";

const ItemSpecifications = ({ item }) => {
  console.log(item);
  const { carouselImages } = item[0];
  return (
    <ItemSpecificationWrapperContainer>
      <TopImageSection type="without-title" />
      <ItemSpecificationTopContainer>
        <ItemContentContainer>
          <div className="item-title-mobile">
            <ItemTitleMobile item={item[0]} />
          </div>
          <CarouselSwiper images={carouselImages} />
          <ItemDescription item={item[0]} />
        </ItemContentContainer>
      </ItemSpecificationTopContainer>
      <div className="hide-on-desktop">
        <AddToCartMobile item={item[0]} />
      </div>
    </ItemSpecificationWrapperContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(ownProps.match.params)(state),
});

export default withRouter(connect(mapStateToProps)(ItemSpecifications));
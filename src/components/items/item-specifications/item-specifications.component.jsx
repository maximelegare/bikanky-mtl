/* eslint-disable react/prop-types */

import React from "react";
import "swiper/swiper-bundle.css"; 

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectItem } from "../../../redux/items/items.selectors";

import {
  ItemSpecificationTopContainer,
  ItemContentContainer,
} from "./item-specifications.styles";

import TopImageSection from "../../top-image-section/top-image-section.component";

import CarouselSwiper from "./Item-carousel-section/item-carousel-section.component";
import ItemDescription from "./item-description-section/item-description-section.component";

const ItemSpecifications = ({ item }) => {
  const { carouselImages, ...otherProps } = item[0];
  return (
    <div>
      <TopImageSection type="item-specifications"/>

      <ItemSpecificationTopContainer>
        <ItemContentContainer>
          <CarouselSwiper images={carouselImages} />
          <div style={{height:'100%', width:'20px'}}></div>
          <ItemDescription {...otherProps}/>
        </ItemContentContainer>
      </ItemSpecificationTopContainer>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(ownProps.match.params)(state),
});

export default withRouter(connect(mapStateToProps)(ItemSpecifications));

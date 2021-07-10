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

const ItemSpecifications = ({ item  }) => {
  console.log(item)
  const { carouselImages } = item[0];
  return (
    <div>
      <TopImageSection type="item-specifications"/>
      <ItemSpecificationTopContainer>
        <ItemContentContainer>  
          <CarouselSwiper images={carouselImages} /> 
          <ItemDescription item={item[0]}/>
        </ItemContentContainer>
      </ItemSpecificationTopContainer>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(ownProps.match.params)(state),
});

export default withRouter(connect(mapStateToProps)(ItemSpecifications));

/* eslint-disable react/prop-types */
import "../../swiper-carousel/swiper-carousel.styles.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Thumbs, Pagination, Navigation } from "swiper/core";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectItem } from "../../../redux/items/items.selectors";

import {
  ItemSpecificationTopContainer,
  ItemImagesContainer,
  ItemContentContainer,
  ItemDescriptionContainer,
} from "./item-specifications.styles";

import TopImageSection from "../../top-image-section/top-image-section.component";

import { ProductImgContainer } from "../../_styling-containers/img-styling-container/img-styling-containers.styles";

SwiperCore.use([Thumbs, Pagination, Navigation]);

const ItemSpecifications = ({ item }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const { title } = item[0];
  return (
    <div>
      <TopImageSection>{title}</TopImageSection>

      <ItemSpecificationTopContainer>
        <ItemContentContainer>
          <ItemImagesContainer>
            <Swiper
              thumbs={{ swiper: thumbsSwiper }}
              className="swiper-styles"
              // pagination
              navigation
              slidesPerView={1}
              spaceBetween={50}
            >
              <SwiperSlide>
                <ProductImgContainer image="https://i.ibb.co/ZYW3VTp/brown-brim.png"></ProductImgContainer>
                {/* <img src="https://i.ibb.co/ZYW3VTp/brown-brim.png" alt="hello" /> */}
              </SwiperSlide>
              <SwiperSlide>
                <ProductImgContainer image="https://i.ibb.co/ZYW3VTp/brown-brim.png"></ProductImgContainer>
                {/* <img src="https://i.ibb.co/ZYW3VTp/brown-brim.png" alt="hello" /> */}
              </SwiperSlide>
              <SwiperSlide>
                <ProductImgContainer image="https://i.ibb.co/ZYW3VTp/brown-brim.png"></ProductImgContainer>
                {/* <img src="https://i.ibb.co/ZYW3VTp/brown-brim.png" alt="hello" style={{width:'100%'}}/> */}
              </SwiperSlide>
            </Swiper>
            <Swiper
              id="thumbs"
              onSwiper={setThumbsSwiper}
              watchSlidesVisibility
              watchSlidesProgress
              slidesPerView={3}
              spaceBetween={20}
              style={{width:'90%', height:'50%'}}
            >
              <SwiperSlide>
              {/* <img src="https://i.ibb.co/ZYW3VTp/brown-brim.png" alt="hello" /> */}
                <ProductImgContainer image="https://i.ibb.co/ZYW3VTp/brown-brim.png"></ProductImgContainer>
              </SwiperSlide>
              <SwiperSlide>
              {/* <img src="https://i.ibb.co/ZYW3VTp/brown-brim.png" alt="hello" /> */}
                <ProductImgContainer image="https://i.ibb.co/ZYW3VTp/brown-brim.png"></ProductImgContainer>
              </SwiperSlide>
              <SwiperSlide>
              {/* <img src="https://i.ibb.co/ZYW3VTp/brown-brim.png" alt="hello" /> */}
                <ProductImgContainer image="https://i.ibb.co/ZYW3VTp/brown-brim.png"></ProductImgContainer>
              </SwiperSlide>
            </Swiper>
          </ItemImagesContainer>
          <ItemDescriptionContainer></ItemDescriptionContainer>
        </ItemContentContainer>
      </ItemSpecificationTopContainer>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(ownProps.match.params)(state),
});

export default withRouter(connect(mapStateToProps)(ItemSpecifications));

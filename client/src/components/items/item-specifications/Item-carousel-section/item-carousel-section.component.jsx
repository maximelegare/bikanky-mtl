/* eslint-disable react/prop-types */
import "./swiper-carousel.styles.scss";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs, Virtual, Navigation, Pagination } from "swiper/core";
import { ItemWrapperContainer } from "../item-specifications.styles";

import { ProductImgContainer } from "../../../_styling-containers/img-styling-container/img-styling-containers.styles";

SwiperCore.use([Thumbs, Virtual, Navigation, Pagination]);

const CarouselSwiper = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <ItemWrapperContainer flex="2">
      <Swiper
        thumbs={{ swiper: thumbsSwiper }}
        className="swiper-wrapper-styles"
        pagination
        slidesPerView={1}
        spaceBetween={50}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <ProductImgContainer
              type="slider"
              image={image.url}
              virtualIndex={index}
            ></ProductImgContainer>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        id="thumbs"
        onSwiper={setThumbsSwiper}
        navigation
        watchSlidesVisibility
        watchSlidesProgress
        slidesPerView={3}
        spaceBetween={20}
        className="swiper-slide-styles"
        
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <ProductImgContainer
              type="slider-thumbs"
              image={image.url}
              virtualIndex={index}
              
            ></ProductImgContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </ItemWrapperContainer>
  );
};

export default CarouselSwiper;

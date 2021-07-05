
import "./swiper-carousel.styles.css";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Thumbs, Navigation, Pagination } from "swiper/core";
import "swiper/swiper-bundle.css";

import { ProductImgContainer } from "../_styling-containers/img-styling-container/img-styling-containers.styles";
// import { SwiperImageContainer } from "./swiper-carousel-item.styles";

SwiperCore.use([Thumbs, Navigation, Pagination]);


const SwiperCarousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div>
      <Swiper
        wrapperTag="ul"
        thumbs={{ swiper: thumbsSwiper }}
        className="swiper-styles"
        slidesPerView={2}
        spaceBetween={50}
        navigation={true}
        pagination={true}
      >
        <SwiperSlide tag="li">
          <ProductImgContainer image="https://i.ibb.co/ZYW3VTp/brown-brim.png"></ProductImgContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ProductImgContainer image="https://i.ibb.co/ZYW3VTp/brown-brim.png"></ProductImgContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ProductImgContainer image="https://i.ibb.co/ZYW3VTp/brown-brim.png"></ProductImgContainer>
        </SwiperSlide>
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        watchSlidesVisibility
        watchSlidesProgress
        slidesPerView={3}

        style={{width:'100px', height:'100px', backgroundColor:'red'}}
      ></Swiper>
    </div>
  );
};
export default SwiperCarousel;

// left section of categories-item-specification (when an item is selected and you can see specifications)
// it renders all images

import React from "react";
import { PropTypes } from "prop-types";
import { ProductImgContainer } from "../../../../../_styling-containers/img-styling-container/img-styling-containers.styles";

import { AdminItemImagesContainer } from "./admin-images.styles";
import { ImageLabelContainer } from "./admin-images.styles";

import { SectionContainer } from "../categories-item-specification.styles";

const AdminItemImages = ({ item }) => {
  const { imageUrl, carouselImages } = item;
  return (
    <>
      <SectionContainer>
        <ImageLabelContainer>Main Image:</ImageLabelContainer>
        <ProductImgContainer type="admin" image={imageUrl} />
      </SectionContainer>
      <SectionContainer>
        <ImageLabelContainer>Carousel Images:</ImageLabelContainer>
        <AdminItemImagesContainer>
          {carouselImages.map((image, idx) => (
            <ProductImgContainer key={idx} type="admin" image={image} />
          ))}
        </AdminItemImagesContainer>
      </SectionContainer>
    </>
  );
};

AdminItemImages.propTypes = {
  item: PropTypes.shape({
    imageUrl: PropTypes.string,
    carouselImages: PropTypes.array,
  }),
};

export default AdminItemImages;

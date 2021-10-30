import React from "react";

import { withRouter } from "react-router";

import {PropTypes} from 'prop-types'

import {
  DirectoryMainImageWrapperContainer,
  ImageContainer,
  TextContentContainer,
  TextWrapperContainer
} from "./directory-main-image.styles";
import mainImage from "../../../assets/main-manches.jpg";



const DirectoryMainImage = ({history}) => {

  return (
    <DirectoryMainImageWrapperContainer  onClick={() => history.push("/creations")}>
      <ImageContainer src={mainImage} alt="main image" className="image-container"/>
      <TextWrapperContainer className="text-wrapper-content">
        <TextContentContainer>Manches</TextContentContainer>
      </TextWrapperContainer>
    </DirectoryMainImageWrapperContainer>
  );
};


DirectoryMainImage.propTypes = {
    history:PropTypes.object
}

export default withRouter(DirectoryMainImage);

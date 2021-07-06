// The top-image is shown below the header and changes depending if it's the homePage or another page.

import React from "react";
import { ImageContainer, TextLogoContainer, TitleContainer } from "./top-image-section.styles";
import bikankyTitleHeader from "../../assets/bikankyTitleHeader.svg";



// eslint-disable-next-line react/prop-types
const TopImageSection = ({ type, children }) => {  
  return (
    <ImageContainer type={type}>
      {type === 'home-page' ? (
        <TextLogoContainer src={bikankyTitleHeader} alt="bikankyTitleHeader"/> 
      ) : (
        <TitleContainer>{children}</TitleContainer>
      )}
    </ImageContainer>
  );
};


export default TopImageSection;

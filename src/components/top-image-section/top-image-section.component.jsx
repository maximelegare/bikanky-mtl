import React from "react";
import { ImageContainer } from "./top-image-section.styles";
import bikankyTitleHeader from "../../assets/bikankyTitleHeader.svg";



// eslint-disable-next-line react/prop-types
const TopImageSection = ({ homePage, children }) => {  
  return (
    <ImageContainer>
      {homePage ? (
        <img src={bikankyTitleHeader} alt="bikankyTitleHeader" />
      ) : (
        <h1 style={{color:'red'}}>{children}</h1>
      )}
    </ImageContainer>
  );
};


export default TopImageSection;

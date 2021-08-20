import styled, { css } from "styled-components";

const selectHeight = (props) => {
  switch (props.type) {
    case "home-page":
      return homePageStyles;
    case "with-title":
      return withTitleStyles;
    case "without-title":
      return withoutTitleStyles;
    default:
      return withTitleStyles
  }
};

const homePageStyles = css`
  height: 35vh;
  @media only screen and (max-width: 900px) {
    height: 250px;
  }
  @media only screen and (max-width: 700px) {
    height: 200px;
  }

`;

const withTitleStyles = css`
  height: 180px;
  @media only screen and (max-width: 900px) {
    height: 160px;
  }
`;
const withoutTitleStyles = css`
  height: 160px;
  @media only screen and (max-width: 900px) {
    height: 120px;
  }

`;

export const ImageContainer = styled.div`
  box-shadow: 0 1px 3px #4e4e4e;
  background-image: url(/assets/top.jpg);
  background-position-y: 100%;
  background-position-x: 50%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  ${selectHeight};
`;

export const TitleContainer = styled.h1`
  color: var(--yellow-accent);
  text-align: center;
  
  padding-top: 80px;
  font-weight: 400;
  @media only screen and (max-width:900px){
    
  }
`;

export const TextLogoContainer = styled.img`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 58%;
  height: 150px;
  @media only screen and (max-width: 900px) {
    height: 120px;
  }
  @media only screen and (max-width: 700px) {
    top: 65%;
    height: 90px;
  }
`;

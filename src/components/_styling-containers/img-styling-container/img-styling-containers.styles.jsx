import styled, { css } from "styled-components";

const selectStyles = (props) => {
  switch (props.type) {
    case "slider":
      return sliderStyles;
      
    case "slider-thumbs":
      return sliderThumbsStyles;
      
    case "card-image" :
      return cardStyles
    default:
      return cardStyles  
  }
};

const cardStyles = css`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  height: 70%;
  @media only screen and (max-width:800px){
    height: 80%;
  }
`
const sliderStyles = css`
border-radius: 8px;
height: 100%;
`
const sliderThumbsStyles = css`
border-radius:8px;
height: 95%;
width:95%;
margin: 3px auto ;
`

export const ProductImgContainer = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.image})`};
  width: 100%;
  cursor: pointer;
  ${selectStyles}

  /* @media screen and (max-width: 1800px) {
    height: 30vh;
  }
  @media screen and (max-width: 1400px) {
    height: 25vh;
  }
  @media screen and (max-width: 1100px) {
    height: 20vh;
  } */
`;

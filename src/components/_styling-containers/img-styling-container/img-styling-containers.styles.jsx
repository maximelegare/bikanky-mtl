import styled, { css } from "styled-components";

const selectStyles = (props) => {
  switch (props.type) {
    case "cart": 
    return cartStyles
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
  height: 300px;
  @media screen and (max-width:900px){
    height: 250px;
  }
  @media screen and (max-width:450px){
    height: 175px;
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

 
`;



export const cartStyles = styled.div`
  width: 4em;
  height: 4em;
  border-radius: 4px;
`;
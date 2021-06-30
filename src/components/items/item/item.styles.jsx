import styled from "styled-components";

export const ItemWrapperContainer = styled.div`
  /* flex-basis: 20em; */
  box-shadow: 0 5px 10px  #1b1b1b55;
  height: 50vh;
  border-radius: 0 0 8px 8px;
  
  
  @media screen and (max-width:1800px){
    height: 30vh;
  }
`;

export const ProductInfosContainer = styled.div`

height: 20%;

`;

export const ProductImgContainer = styled.div`
  height: 80%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: ${props => (`url(${props.image})`)} ;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;



export const ProductTextContainer = styled.div``;

export const ButtonContainer = styled.div`
width: 30%;
height: 100%;

`

export const PriceContainer = styled.div`
width: 100%;

/* background-color: #ffffff; */
border-bottom-left-radius: 10px;
border-bottom-left-radius: 8px;

`

export const ProductPriceButtonContainer = styled.div`
display: flex;
width: 100%;
height: 100%;
`;

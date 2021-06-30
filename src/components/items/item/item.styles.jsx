import styled from "styled-components";

export const ItemWrapperContainer = styled.div`
  /* flex-basis: 20em; */
  background-color: #cfcfcf;
  height: 40vh;
  
  
  @media screen and (max-width:1200px){
    height: 30vh;
  }
`;

export const ProductInfosContainer = styled.div``;

export const ProductImgContainer = styled.div`
  border-top-left-radius:10px ;
  border-bottom-left-radius:10px ;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: ${props => (`url(${props.image})`)} ;

`;

export const ProductTextContainer = styled.div``;
export const ProductPriceButtonContainer = styled.div``;

import styled from "styled-components";



export const ItemWrapperContainer = styled.div`
  border-radius: 8px 8px 8px 8px;

  box-shadow: 0 5px 10px #1b1b1b55;
  background-color: white;
  transition:1s cubic-bezier(.53,-0.02,.1,1.18);
  :hover{
    transform: scale(1.07)
  }
`;

export const ProductInfosContainer = styled.div`
  height: 80px;
`;

export const ProductImgContainer = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  height: 80%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: ${(props) => `url(${props.image})`};
  height: 40vh;
  cursor: pointer;

  @media screen and (max-width: 1800px) {
    height: 30vh;
  }
`;

export const ProductTextContainer = styled.div`

`;

export const ButtonContainer = styled.div`
  width: 30%;
  height: 100%;
`;

export const PriceNameContainer = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  margin-left:10px ;
  h4{
    color: #646464;
    font-weight: 200;
  }
`;

export const ProductPriceButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;



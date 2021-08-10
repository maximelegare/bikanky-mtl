import styled from "styled-components";

export const CheckoutCartItemWrapperContainer = styled.div`
  margin-top: 15px;
  /* height: 100%; */
  border-radius: 5px;
  border: 1px solid var(--hr-color);
  padding: 20px;

  @media screen and (max-width:560px){
    padding: 10px;
  }
`;

export const ProductInfosWrapperContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width:560px){
    /* justify-content: center; */
  }
`;

export const ProductInfosContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ImageContainer = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  min-width: 7rem;
  height: 7rem;
  border-radius: 4px;
`;

export const InfosContainer = styled.div``;

export const PriceContainer = styled.h4`
  margin-top: 5px;
  color: var(--red-accent);
`;

export const TextContainer = styled.div`
  max-width: 300px;

  .title {
    margin-bottom: 10px;
  }
  .description {
    /* max-width: 300px; */
    margin-right: 10px;
  }
  @media screen and (max-width:560px){
    display: none;
  }
`;

export const QuantityWrapperContainer = styled.div`
  align-self: center;
`;

export const NumberContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  h4 {
    text-decoration: none;
    margin: 0 5px;
    width: 30px;
    text-align: center;
    font-size: 1.2rem;
  }
  span {
    font-size: 1.6rem;
    color: var(--yellow-accent);
    padding: 3px;
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;


export const TitleContainer = styled.div`
display: flex;
/* justify-content: center; */
border-radius: 4px;
a{
  margin-right: 5px;
}
h4{
  margin: auto 0 ;
}
@media screen and (min-width:560px){
  display: none;
}
`
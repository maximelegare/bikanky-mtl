import styled from "styled-components";

export const CheckoutCartItemWrapperContainer = styled.div`
  margin-bottom: 10px;
  /* height: 100%; */
  padding: 20px;
  border-radius: 5px;
  border: 1px solid var(--hr-color);
`;

export const ProductInfosWrapperContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProductInfosContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ImageContainer = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  width: 10em;
  height: 10em;
  border-radius: 4px;
`;

export const InfosContainer = styled.div``;

export const PriceContainer = styled.h4`
  margin-top: 5px;
  color:var(--red-accent);
`;

export const TextContainer = styled.div`
  width: 300px;
  h4.title {
    text-decoration: underline;
    margin-bottom: 5px;
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
    font-size: 1.2rem;
  }
  span {
    font-size: 1.3rem;
    color: var(--yellow-accent);
    padding: 5px;
    cursor: pointer;
  }
`;

export const ButtonContainer = styled.div`
  text-align: center;
`;

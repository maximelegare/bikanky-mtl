import styled from "styled-components";

export const ItemWrapperContainer = styled.div`
  border-radius: 8px 8px 8px 8px;

  box-shadow: 0 5px 10px #1b1b1b55;
  background-color: var(--card-background-color);
  transition: 600ms cubic-bezier(0.53, -0.02, 0.1, 1.18);
  /* height:40vh; */
  :hover {
    transform: scale(1.05);
  }
  @media only screen and (max-width: 450px) {
    /* height: 30vh; */
  }
`;

export const ProductInfosContainer = styled.div`
  /* height: 95px; */
`;

export const ButtonWrapperContainer = styled.div`
  display: flex;
  align-items: center;
    justify-content: center;  
    margin-bottom: 15px;
`;

export const ProductTextContainer = styled.div``;

// export const ButtonContainer = styled.div`
//   /* width: 30%; */
//   height: 100%;
// `;

export const PriceNameContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
  h4 {
    color: #646464;
    font-weight: 200;
  }
    justify-content: center;
    text-align: center;
`;

export const ProductPriceButtonContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 5px;
  margin: 5px 0;
  justify-content: space-evenly;
  
`;

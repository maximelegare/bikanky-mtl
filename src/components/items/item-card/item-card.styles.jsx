import styled from "styled-components";



export const ItemWrapperContainer = styled.div`
  border-radius: 8px 8px 8px 8px;

  box-shadow: 0 5px 10px #1b1b1b55;
  background-color: white;
  transition:600ms cubic-bezier(.53,-0.02,.1,1.18);
  height:40vh;
  :hover{
    transform: scale(1.05)
  }
  @media only screen and (max-width:500px){
    height: 50vh;
  }
`;

export const ProductInfosContainer = styled.div`
  /* height: 95px; */
`;

export const IconButtonWrapperContainer = styled.div`
display: flex;
align-items: center;
`

export const ProductTextContainer = styled.div`

`;

// export const ButtonContainer = styled.div`
//   /* width: 30%; */
//   height: 100%;
// `;

export const PriceNameContainer = styled.div`
  width: 80%;
  display:flex;
  align-items: center;
  height: 100%;
  h4{
    color: #646464;
    font-weight: 200;
  }
`;

export const ProductPriceButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 5px;
  margin-top: 5px;
  justify-content: space-evenly;
  
`;



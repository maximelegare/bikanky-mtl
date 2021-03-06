import styled from "styled-components";

export const CheckoutPriceContainer = styled.div`
  padding: 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px ;
`;

export const OrderSummaryContainer = styled.div`
  
`;

export const OrderTableContainer = styled.table`
  margin-top: 20px;
  width: 100%;

  td.price {
    text-align: right;
  }
  td.separator {
    width: 90px;
    height: 10px;
  }
`;


export const CheckoutTotalContainer = styled.div`
padding-top: 10px;
display: flex;
justify-content: space-between;
margin: 0 auto;
`

export const TotalContainer = styled.h3`
font-size: 1.2rem;
color: var(--red-accent);
`

export const TestCreditCardContainer = styled.div`
border:2px solid red;
text-align: center;
margin: 5px;
border-radius: 5px;
padding: 5px;
h5 {color:red}
`
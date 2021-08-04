import styled from "styled-components";

export const CheckoutPriceContainer = styled.div`
  padding: 0 15px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const OrderSummaryContainer = styled.div`
  
`;

export const OrderTable = styled.table`
  margin: 20px 0;
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
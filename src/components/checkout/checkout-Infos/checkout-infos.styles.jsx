import styled from "styled-components";

export const CheckoutInfosContainer = styled.div`
  /* margins of the section */
  padding: 0 20px;
  
`;

export const CheckoutStepContainer = styled.div`
  display: ${props => props.flex ? 'flex' : 'block'};
  justify-content: space-between;
  /* padding top-bottom of each elements */
  padding: 15px 0;
`;


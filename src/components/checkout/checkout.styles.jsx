import styled from "styled-components";

export const CheckoutSectionContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const SectionCardContainer = styled.div`
  border-radius: 8px;

  box-shadow: 0 5px 10px #1b1b1b55;
  background-color: var(--card-background-color);
  flex: ${(props) => props.flex};
  height: 400px;
  ${(props) => `width: ${props.width}`};
`;

export const InfosCartSection = styled.div``;
export const PriceSection = styled.div``;

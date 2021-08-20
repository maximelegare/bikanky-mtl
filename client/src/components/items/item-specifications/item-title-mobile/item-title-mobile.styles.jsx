import styled from "styled-components";

export const TitleWrapperContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  align-items: center;
  h2 {
    font-family: "Open Sans", sans-serif;
  }
`;

export const MarginWrapperContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const PriceAndStockContainer = styled.div`
  text-align: center;
`;

export const PriceContainer = styled.h4`
  font-size: 1.05rem;
  color: var(--red-accent);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

export const TopDescriptionContainer = styled.p`
  margin-bottom: 15px;
  font-weight: 400;
  color: #5e5e5e;
  max-width: 500px;
`;

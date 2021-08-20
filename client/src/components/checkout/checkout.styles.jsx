import styled from "styled-components";

export const CheckoutSectionContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .infos {
      order: 2;
      width: 100%;
    }
    .price {
      order: 1;
      width: 100%;
    }
  }
`;

export const SectionCardContainer = styled.div`
  border-radius: 8px;

  box-shadow: 0 5px 10px #1b1b1b55;
  background-color: var(--card-background-color);
  flex: ${(props) => props.flex};
  ${(props) => `width: ${props.width};`}
  ${(props) => `height: ${props.height};`}
  @media screen and (max-width: 900px){
    height: unset;
  }
  
`;

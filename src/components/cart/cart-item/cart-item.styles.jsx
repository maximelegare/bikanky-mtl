import styled from "styled-components";

export const CartDropdownWrapperContainer = styled.div`
  width: 100%;
  height: 80px;
  margin: 5px 0;
  background-color: ${(props) => (props.sideSlider ? "#272727" : "#f0f0f0")};
  border-radius: 8px;
`;

export const CartDropdownContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 8px ;

`;

export const CartLeftContainer = styled.div`
display: flex;
align-items: center;
`

export const ImageContainer = styled.div`
  background-image: ${(props) => `url(${props.image})`};
  background-position: center;
  background-size: cover;
  width: 4em;
  height: 4em;
  border-radius: 4px;
`;

export const DescriptionContainer = styled.div`
margin-left: 8px;
  h5 {
    color: ${(props) =>
      props.sideSlider ? "var(--mobile-slider-text-color)" : "#272727"};
    
  }
  .title {
    text-decoration: underline;
    margin-bottom: 8px;
  }
  .price {
    font-weight: 400;
  }
`;

// export const ItemTitleContainer = styled.h5``;

// export const ItemQuantityAndPriceContainer = styled.h5`

//   color: ${(props) =>
//     props.sideSlider ? "var(--mobile-slider-text-color)" : "#272727"};
// `;

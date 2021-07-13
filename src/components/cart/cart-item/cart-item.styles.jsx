import styled from "styled-components";

export const CartDropdownWrapperContainer = styled.div`
  width: 100%;
  height: 80px;
  margin: 5px 0;
  background-color: ${(props) => (props.sideSlider ? "#272727" : "#f0f0f0")};
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  
`;

// this section sits on top of every swipe cart items to make sure the right element is selected when a user swipe
export const CartDropdownSwipeSection = styled.div`
  position: absolute;
  /* background-color: #000000c7; */
  z-index: 10;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  &.delete-item{
    background-color: red;
  }
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



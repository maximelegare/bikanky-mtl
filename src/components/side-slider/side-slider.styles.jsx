import styled, { keyframes } from "styled-components";

const sliderAnimation = keyframes`
    from {
        right:-40%
    }
    to{
        right:0
    }
`;

export const SideSliderWrapperContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 50%;
  background-color: #0c0c0cef;
  z-index: 0;
  transition: all 0.5s ease;
  right: -40%;
  animation: ${sliderAnimation} 0.5s ease-in-out forwards;
  

  @media screen and (max-width: 700px) {
    width: 75%;
  }
`;

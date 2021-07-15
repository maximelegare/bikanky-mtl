import styled, { keyframes } from "styled-components";

const elementEnterAnimation = keyframes`
    0% {
        opacity:0;
        top:17px;
    }
    20%{
        opacity:1
    }
    100%{
        top:7px
    }
`;

const elementExitAnimation = keyframes`
    0% {
        opacity:1;
        top:17px
    }
    100%{
        opacity:0;
        top:7px
        
    }
`;

export const TransitionsDropdownContainer = styled.div`
  &.cart-enter-active {
    animation: ${elementEnterAnimation} 0.6s cubic-bezier(0.05, 0.74, 0.26, 1)
      forwards;
  }

  &.cart-exit-active {
    animation: ${elementExitAnimation} 0.2s
      cubic-bezier(0.33, -0.36, 0.42, 0.97) forwards;
  }
`;


export const TransitionsWrapperContainer = styled.div`
background-color: red;

`

export const BackgroundContainer = styled.div`
  background-color: var(--bg-color-modal);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 1;
`;
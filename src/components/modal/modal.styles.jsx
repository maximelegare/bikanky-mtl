import styled, { keyframes } from "styled-components";

const elementEnterAnimation = keyframes`
    0%{
      opacity:0;
      margin-top:5px
    }
    30%{
      opacity:1;
      
    }
    100%{
      margin-top:0px
    }
`;

const elementExitAnimation = keyframes`
    0% {
        opacity:1;
        margin-top:0;
    }
    100%{
        opacity:0;
        margin-top:10px;
        
    }
`;

// with this div, the modal can scroll if it is longer than the screen
export const ModalWrapperContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  overflow-y: auto;
`;

// this div is the actual modal
export const ModalContainer = styled.div`
  min-width: 100px;
  min-height: 100px;
  background-color: var(--div-bg-color);
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 70vh;
  z-index: 2000;
  border-radius: 8px;
  box-shadow: var(--medium-box-shadow);
  overflow: hidden;
  /* &::after {
    content: "";
    width: 100%;
    height: 40px;
    display: block;
    position: absolute;
    bottom: 0px;
    background-color: red;
  } */

  &.modal-enter-active {
    animation: ${elementEnterAnimation} 500ms
      cubic-bezier(0.33, -0.36, 0.42, 0.97) forwards;
  }

  &.modal-exit-active {
    animation: ${elementExitAnimation} 200ms
      cubic-bezier(0.33, -0.36, 0.42, 0.97) forwards;
  }
`;

// this div is where the user clicks if he wants to close the modal
export const ModalTransparentBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1000;
  overflow-y: auto;
`;

// this div is the background color
export const ModalBackgroundContainer = styled.div`
  background-color: var(--bg-color-modal);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 400;

  &.background-enter {
    opacity: 0;
  }
  &.background-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  &.background-exit {
    opacity: 1;
  }
  &.background-exit-active {
    opacity: 0;
    transition: opacity 300ms ease-out;
  }
`;

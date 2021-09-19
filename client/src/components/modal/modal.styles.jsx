import styled from "styled-components";


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

// position the modal
export const ModalOverlayContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 60vh;
  z-index: 2000;
`;

// this div is the actual modal
export const ModalContainer = styled.div`
  min-width: 100px;
  min-height: 100px;
  background-color: var(--div-bg-color);
  border-radius: 8px;
  box-shadow: var(--medium-box-shadow);
  overflow:hidden;

  
`;


// separator under the modal
export const SeparatorContainer = styled.div`
  width: 100%;
  height: 40px;
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

import styled, {keyframes} from "styled-components";

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

export const ModalWrapperContainer = styled.div`
  min-width: 100px;
  min-height: 100px;
  background-color: var(--div-bg-color);
  position: fixed;
  transform: translate(-50%, -50%);
  left: 50%;
  z-index: 1000;
  top: 50vh;
  border-radius: 8px;
  box-shadow: var(--medium-box-shadow);
  overflow:hidden;

  &.modal-enter-active {
    animation: ${elementEnterAnimation} 500ms
      cubic-bezier(0.33, -0.36, 0.42, 0.97) forwards;
  }

  &.modal-exit-active {
    animation: ${elementExitAnimation} 200ms
      cubic-bezier(0.33, -0.36, 0.42, 0.97) forwards;
  }
`;

export const ModalBackground = styled.div`
  background-color: var(--bg-color-modal);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 400;

  &.background-enter{
    opacity: 0;
  }
  &.background-enter-active{
    opacity: 1;
    transition: opacity 300ms ease-in 
  }
  &.background-exit{
    opacity: 1;
  }
  &.background-exit-active{
    opacity:0;
    transition: opacity 300ms ease-out;
  }
`;



 



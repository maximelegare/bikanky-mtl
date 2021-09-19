import styled, {keyframes} from "styled-components";

const modalEnterAnimation = keyframes`
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

const modalExitAnimation = keyframes`
    0% {
        opacity:1;
        margin-top:0;
    }
    100%{
        opacity:0;
        margin-top:10px;
        
    }
`;

export const ModalAnimationContainer = styled.div`
  position: absolute;
  z-index: 3000;
  &.modal-enter-active {
    animation: ${modalEnterAnimation} 500ms
      cubic-bezier(0.33, -0.36, 0.42, 0.97) forwards;
  }

  &.modal-exit-active {
    animation: ${modalExitAnimation} 200ms
      cubic-bezier(0.33, -0.36, 0.42, 0.97) forwards;
  }
`;

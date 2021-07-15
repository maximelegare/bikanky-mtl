import styled, {keyframes} from "styled-components";

const elementEnterAnimation = keyframes`
    0%{
      opacity:0;
      margin-top:10px
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

export const TransitionsDropdownContainer = styled.div`

  /* the right 5% is positioning the dropdown with it's container */
  /* it needs to be position absolute to handle the margin top here for the animation */
  right: 5%;
  position: absolute;
  top: 50px;


  &.element-enter-active {
      /* opacity: 1; */
      /* margin-top: 20px; */
      animation: ${elementEnterAnimation} 500ms cubic-bezier(0.33, -0.36, 0.42, 0.97) forwards;
      
      /* transition: opacity 200ms */
      
  } 

  &.element-exit-active {
    animation: ${elementExitAnimation} 200ms cubic-bezier(0.33, -0.36, 0.42, 0.97) forwards;
  }
`; 




export const BackgroundContainer = styled.div`
  background-color: var(--bg-color-modal);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 1;
`;
import styled, { keyframes } from "styled-components";

const sliderAnimationEnterTablet = keyframes`
    from {
        right:-50%
    }
    to{
        right:-2%
    }
`;

const sliderAnimationCloseTablet = keyframes`
    from {
        right:-2%
    }
    to{
        right:-50%
    }
`;
const sliderAnimationCloseMobile = keyframes`
    from {
        right:-2%
    }
    to{
        right:-75%
    }
`;

export const SideSliderStylesContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  overflow-y: scroll;
  /* bottom: 0; */
  width: 50%;
  background-color: #0c0c0cef;
  z-index: 1;
  right: -2%;
  box-shadow: 0 3px 8px #0f0f0f;

  &.slider-enter-active {
    animation: ${sliderAnimationEnterTablet} 0.6s cubic-bezier(0.05, 0.74, 0.26, 1)
      forwards;
  }

  &.slider-exit-active {
    animation: ${sliderAnimationCloseTablet} 0.4s
      cubic-bezier(0.33, -0.36, 0.42, 0.97) forwards;
  }

  @media screen and (max-width: 700px) {
    width: 75%;

    &.slider-exit-active {
    animation: ${sliderAnimationCloseMobile} 0.4s
      cubic-bezier(0.33, -0.36, 0.42, 0.97) forwards;
  }

  }
`;

export const BackgroundStylesContainer = styled.div`
position: fixed;
z-index: 0;
top: 0;
left: 0;
right: 0;
bottom: 0;
/* height: 100vh; */
background-color: var(--bg-color-modal);
overflow-y:hidden ;
/* scroll-behavior: contain; */

`
export const MobileOptionsContainer = styled.div`
  width: 80%;
  margin-top:100px;
`;

export const ButtonContainer = styled.div`
margin: 20px 0;
width: 100%;
display: flex;
justify-content: center;

`


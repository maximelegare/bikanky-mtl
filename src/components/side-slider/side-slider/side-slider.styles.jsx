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
  bottom: 0;
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
background-color: var(--bg-color-modal);

`

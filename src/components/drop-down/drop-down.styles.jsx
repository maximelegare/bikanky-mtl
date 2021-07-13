import styled from "styled-components";




export const DropDownWrapperContainer = styled.div`
  
`;
export const DropDownContainer = styled.div`
  position: absolute;
  z-index: 100;
  right: 0;
  top: 80px;
  margin-right: 5%;

`;
export const TriangleContainer = styled.div`
  width: 0px;
  height: 0px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid white;
  position: absolute;
  margin-top: -9px;
  margin-right: 6px;
  right: 0;
`;

export const DropdownStylesContainer = styled.div`
  background-color: var(--div-bg-color);
  border-radius: 8px;
  box-shadow: var(--medium-box-shadow);
`;

export const BackgroundContainer = styled.div`
  background-color: var(--bg-color-modal);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  z-index: 1;

  .background-enter {
    opacity: 0;
  }
  .background-enter-active {
    opacity: 1;
    transition: opacity 200ms;
  }
  .background-exit {
    opacity: 1;
  }
  .background-exit-active {
    opacity: 0;
    transition: opacity 200ms;
  }
`;

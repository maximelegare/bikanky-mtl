import styled from "styled-components";



export const DropDownContainer = styled.div`
  ${(props) => `margin-right: calc(5% + ${props.margin}px)`};
  /* margin-right:20%; */
  /* position: inherit; */
  z-index: 100;
  position: absolute;
  /* transform: translate(-50%, 0); */
  right: 0;
`;

export const TriangleWrapperContainer = styled.div`
  position: absolute;
  margin-top: -20px;
  margin-right: 6px;
  right: 0;
  padding:13px;
  padding-top: 15px;
  
`;

export const TriangleContainer = styled.div`
  width: 0px;
  height: 0px;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  border-bottom: 10px solid white;
`;

export const DropdownStylesContainer = styled.div`
  background-color: var(--div-bg-color);
  border-radius: 8px;
  box-shadow: var(--medium-box-shadow);
  min-width: 50px;
  min-height: 50px;
`;



import styled from "styled-components";

export const IconButtonContainer = styled.span`
  color: black;
  justify-content: center;
  align-items: center;
  font-size: 28px;

  margin: auto auto;
`;
export const IconWrapperContainer = styled.button`
  display: flex;
  width: 100px;
  border-left: 1px solid #bdbdbd;
  height: 100%;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  border:none;
  background-color: transparent;
  
  :hover {
    background-color: #efcb1d;
  }
`;

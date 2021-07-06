import styled from "styled-components";

export const CartIconContainer = styled.div`
  height: 100%;
  display: inline-block;
  position: relative;
  color: white;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    color: #efcb1d;
  }
`;

export const CartNumberContainer = styled.div`
  display: flex;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 100%;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: #efcb1d;
  border-radius: 50%;
  box-shadow: 0 0 3px #272727;
`;

export const NumberContainer = styled.h4`
  color: black;
`;

import styled from "styled-components";

export const CartIconContainer = styled.div`
  display: inline-block;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  color: white;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 2rem;
  height: 2.6rem;
  /* margin:0 12px; */
  &:hover {
    color: var(--yellow-accent);
  }
`;

export const CartNumberContainer = styled.div`
  display: flex;
  position: absolute;
  margin-left: -2px;
  transform: translate(-50%, -50%);
  left: 100%;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: var(--yellow-accent);
  border-radius: 50%;
  box-shadow: 0 0 3px #272727;
`;

export const NumberContainer = styled.h4`
  color: black;
`;

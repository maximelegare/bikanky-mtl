import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderStylesContainer = styled.div`
  width: 100%;
  height: 2.6rem;
  position: absolute;
  margin-top: 2rem;
  background-color: #1a1a1f99;
  display: flex;
  align-items: center;
`;
export const HeaderContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled(Link)`
  width: 3.4rem;
  height: 100%;
`;

export const OptionsContainer = styled.div``;

export const OptionsLink = styled(Link)`
  margin: 12px;
  color: #dfdfdf;
  font-size: 1rem;
  transition: 200ms ease-in-out;
  :hover,
  :focus {
    color: #efcb1d;
  }
`;

import styled from "styled-components";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const HeaderStylesContainer = styled.div`
  width: 100%;
  height: 2.6rem;
  position: absolute;
  margin-top: 2rem;
  background-color: #1a1a1f99;
  display: flex;
  align-items: center;
  z-index: 10;
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


export const RightSectionWrapperContainer = styled.div`
display: flex;
align-items: center;
`

export const OptionsLink = styled(NavLink)`
  margin: 12px;
  color: #dfdfdf;
  font-size: 1rem;
  transition: 200ms ease-in-out;
  :hover{
    color: #efcb1d;
  }

  &.active{
    color:#efcb1d;
  }
  
`;

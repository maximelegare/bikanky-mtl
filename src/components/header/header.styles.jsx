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
  img{
    @media (max-width: 700px) {
    width: 2.5rem;
    }
  }

`;

// desktop view
export const RightSectionDesktopWrapperContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
  display:none;
  }
`;

export const OptionsContainer = styled.div``;

export const OptionsLink = styled(NavLink)`
  margin: 12px;
  color: #dfdfdf;
  font-size: 1rem;
  transition: 200ms ease-in-out;
  :hover {
    color: var(--yellow-accent);
  }

  &.active {
    color: var(--yellow-accent);
  }
`;

// mobile view

export const RightSectionMobileWrapperContainer = styled.div`
display: none;
position: relative;
z-index: 1;
@media (max-width: 900px) {

  display:initial;
  }
`



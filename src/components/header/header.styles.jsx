import styled, { css } from "styled-components";
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
  img {
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
    display: none;
  }
`;

export const MobileOptionsContainer = styled.div`
  width: 80%;
  margin-top:80px;

`;



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

// It's to make sure the burger menu follows the sidebar when it's open. Otherwise, if the person scroll, we can't see it.
const getBurgerIconStylesPosition = (props) => {
  if (props.sliderVisibility) {
    return sliderOpenBurgerIconPositionStyles;
  }
  return sliderCloseBurgerIconPositionStyles;
};

export const RightSectionMobileWrapperContainer = styled.div`
  display: none;
  ${getBurgerIconStylesPosition}
  z-index: 1;

  @media (max-width: 900px) {
    display: initial;
  }
`;

const sliderCloseBurgerIconPositionStyles = css`
  position: relative;
`;

const sliderOpenBurgerIconPositionStyles = css`
  position: fixed;
  right: 0;
  margin-right: 5%;
`;




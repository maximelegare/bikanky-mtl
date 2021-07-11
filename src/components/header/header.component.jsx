/* eslint-disable react/prop-types */
import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { selectCartVisibility } from "../../redux/cart/cart.selectors";
import { HamburgerSlider } from "react-animated-burgers";

import { CSSTransition } from "react-transition-group";

import bikankyLogoHeader from "../../assets/logoHeader.svg";
import {
  HeaderStylesContainer,
  LogoContainer,
  HeaderContainer,
  OptionsContainer,
  OptionsLink,
  RightSectionDesktopWrapperContainer,
  RightSectionMobileWrapperContainer,
} from "./header.styles";

import CartDropdown from "../cart/cart-dropdown/cart-dropdown.component";
import SideSlider from "../side-slider/side-slider.component";
import CartIcon from "../cart/cart-icon/cart-icon.component";

const Header = () => {
  const cartVisibility = useSelector(selectCartVisibility);
  const [isActive, setIsActive] = useState(false);

  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  );

  return (
    <div>
      {cartVisibility ? <CartDropdown /> : null}

      <HeaderStylesContainer>
        <HeaderContainer>
          <LogoContainer to="/">
            <img src={bikankyLogoHeader} alt="bikanky Logo Header" />
          </LogoContainer>

          <RightSectionMobileWrapperContainer>
            <HamburgerSlider
              buttonWidth={30}
              barColor={"var( --yellow-accent)"}
              {...{ isActive, toggleButton }}
            />
          </RightSectionMobileWrapperContainer>

          <CSSTransition >
            <SideSlider isActive={isActive} />
          </CSSTransition>

          <RightSectionDesktopWrapperContainer>
            <OptionsContainer>
              <OptionsLink activeClassName="active" to="/creations">
                Créations
              </OptionsLink>
              <OptionsLink activeClassName="active" to="/services">
                Services
              </OptionsLink>
              <OptionsLink activeClassName="active" to="/about">
                À Propos
              </OptionsLink>
              <OptionsLink activeClassName="active" to="/contact">
                Contact
              </OptionsLink>
            </OptionsContainer>
            <div>
              <CartIcon></CartIcon>
            </div>
          </RightSectionDesktopWrapperContainer>
        </HeaderContainer>
      </HeaderStylesContainer>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartVisibility: selectCartVisibility,
// });

export default Header;

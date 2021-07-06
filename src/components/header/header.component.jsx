import React from "react";
import bikankyLogoHeader from "../../assets/logoHeader.svg";
import {
  HeaderStylesContainer,
  LogoContainer,
  HeaderContainer,
  OptionsContainer,
  OptionsLink,
  RightSectionWrapperContainer
} from "./header.styles";

import CartIcon from "../cart/cart-icon/cart-icon.component";

const Header = () => {
  return (
    <HeaderStylesContainer>
      <HeaderContainer>
        <LogoContainer to="/">
          <img src={bikankyLogoHeader} alt="bikanky Logo Header" />
        </LogoContainer>
        <RightSectionWrapperContainer>
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
          <CartIcon />
        </RightSectionWrapperContainer>
      </HeaderContainer>
    </HeaderStylesContainer>
  );
};

export default Header;

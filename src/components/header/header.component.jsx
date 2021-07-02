import React from "react";
import bikankyLogoHeader from "../../assets/logoHeader.svg";
import {
  HeaderStylesContainer,
  LogoContainer,
  HeaderContainer,
  OptionsContainer,
  OptionsLink,
} from "./header.styles";

const Header = () => {
  return (
    <HeaderStylesContainer>
      <HeaderContainer>
        <LogoContainer to="/">
          <img src={bikankyLogoHeader} alt="bikanky Logo Header" />
        </LogoContainer>
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
      </HeaderContainer>
    </HeaderStylesContainer>
  );
};

export default Header;

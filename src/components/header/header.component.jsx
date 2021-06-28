import React from "react";
import bikankyLogoHeader from '../../assets/logoHeader.svg';
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
          <OptionsLink to="/creations">Créations</OptionsLink>
          <OptionsLink to="/services">Services</OptionsLink>
          <OptionsLink to="/about">À Propos</OptionsLink>
          <OptionsLink to="/contact">Contact</OptionsLink>
        </OptionsContainer>
      </HeaderContainer>
    </HeaderStylesContainer>
  );
};

export default Header;

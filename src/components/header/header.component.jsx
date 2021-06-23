import React from "react";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
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
          <Logo />
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

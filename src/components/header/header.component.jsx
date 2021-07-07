/* eslint-disable react/prop-types */
import React from "react";
import { selectCartVisibility } from "../../redux/cart/cart.selectors";

import { useSelector } from "react-redux";
import bikankyLogoHeader from "../../assets/logoHeader.svg";
import {
  HeaderStylesContainer,
  LogoContainer,
  HeaderContainer,
  OptionsContainer,
  OptionsLink,
  RightSectionWrapperContainer,
} from "./header.styles";

import CartDropdown from "../cart/cart-dropdown/cart-dropdown.component";

import CartIcon from "../cart/cart-icon/cart-icon.component";

const Header = () => {
  const cartVisibility = useSelector(selectCartVisibility);

  return (
    <div>
      {cartVisibility ? <CartDropdown /> : null}

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
            <div>
              <CartIcon></CartIcon>
            </div>
          </RightSectionWrapperContainer>
        </HeaderContainer>
      </HeaderStylesContainer>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartVisibility: selectCartVisibility,
// });

export default Header;

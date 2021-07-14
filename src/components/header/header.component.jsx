/* eslint-disable react/prop-types */


import React, { useCallback, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSliderVisibility } from "../../redux/side-slider/side-slider.selectors";

import { toggleSliderVisibility } from "../../redux/side-slider/side-slider.slice";

import { selectCartVisibility } from "../../redux/cart/cart.selectors";
import { HamburgerSlider } from "react-animated-burgers";

import bikankyLogoHeader from "../../assets/logoHeader.svg";
import {
  HeaderStylesContainer,
  LogoContainer,
  HeaderContainer,
  MobileOptionsContainer,
  OptionsLink,
  RightSectionDesktopWrapperContainer,
  RightSectionMobileWrapperContainer,
} from "./header.styles";

import CartDropdown from "../cart/cart-dropdown/cart-dropdown.component";
import SideSlider from "../side-slider/side-slider/side-slider.component";
import CartIcon from "../cart/cart-icon/cart-icon.component";
import SliderOptionsLink from "../side-slider/side-slider-options-link/side-slider-options-link.component";
import CartSideSliderMobile from "../cart/cart-slider-mobile/cart-slider-mobile.component";

const Header = () => {

  const cartVisibility = useSelector(selectCartVisibility);
  const sliderVisibility = useSelector(selectSliderVisibility);
  const dispatch = useDispatch();

  // sliderVisibility is set at !sliderVisibility because useEffect runs the function everyTime it changes, including when it mount. But the first time, I want the icon to be the burger, not the X
  const [isActive, setIsActive] = useState(!sliderVisibility);

  useEffect(() => {
    toggleButton();
  }, [sliderVisibility]);

  const toggleButton = useCallback(
    () =>
      setIsActive((prevState) => {
        return !prevState;
      }),
    [sliderVisibility]
  );

  const handleClickEvent = () => {
    dispatch(toggleSliderVisibility());
    toggleButton();
  };

  return (
    <div>
      <CartDropdown isActive={cartVisibility} />

      <HeaderStylesContainer>
        <HeaderContainer>
          <LogoContainer to="/">
            <img src={bikankyLogoHeader} alt="bikanky Logo Header" />
          </LogoContainer>

          <RightSectionMobileWrapperContainer
            onClick={() => handleClickEvent()}
            sliderVisibility={sliderVisibility}
          >
            <HamburgerSlider
              buttonWidth={30}
              barColor={"var( --yellow-accent)"}
              {...{ isActive, toggleButton }}
            />
          </RightSectionMobileWrapperContainer>

          <SideSlider>
            <MobileOptionsContainer>
              <SliderOptionsLink route="/creations" title="Créations" />
              <SliderOptionsLink route="/services" title="Services" />
              <SliderOptionsLink route="/about" title="À Propos" />
              <SliderOptionsLink route="/contact" title="Contact" />
              <CartSideSliderMobile />
            </MobileOptionsContainer>
          </SideSlider>

          <RightSectionDesktopWrapperContainer>
            <div>
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
            </div>
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

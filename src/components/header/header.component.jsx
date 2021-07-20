/* eslint-disable react/prop-types */
import React, { useCallback, useState, useEffect } from "react";


// redux imports
import { useSelector, useDispatch } from "react-redux";
import { toggleSliderVisibility } from "../../redux/side-slider/side-slider.slice";
import { selectSliderVisibility } from "../../redux/side-slider/side-slider.selectors";
import { selectHoverCartVisibility } from "../../redux/dropdown-elements-visibility/dropdown.selector";
import { selectClickCartVisibility } from "../../redux/dropdown-elements-visibility/dropdown.selector";

import { selectHoverSignInVisibility } from "../../redux/dropdown-elements-visibility/dropdown.selector";
import { selectClickSignInVisibility } from "../../redux/dropdown-elements-visibility/dropdown.selector";
// import { selectCurrentUser } from "../../redux/user/user.selector";


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


// components imports 
import CartDropdown from "../drop-down/cart-dropdown/cart-dropdown.component";
import SideSlider from "../side-slider/side-slider/side-slider.component";
import CartIcon from "../buttons/cart-icon/cart-icon.component";
import SliderOptionsLink from "../side-slider/side-slider-options-link/side-slider-options-link.component";
import CartSideSliderMobile from "../cart/cart-slider-mobile/cart-slider-mobile.component";
import UserIconButton from "../buttons/user-icon/userIcon.component";
import DropdownWithTransitions from "../drop-down/dropdown-with-transitions/dropdown-with-transitions.component";
import UserDropdown from "../drop-down/user-dropdown/user-dropodwn.component";



 


const Header = () => {
  const sliderVisibility = useSelector(selectSliderVisibility);

  const cartClickVisibility = useSelector(selectClickCartVisibility);
  const cartHoverVisibility = useSelector(selectHoverCartVisibility);
  const signinHoverVisibility = useSelector(selectHoverSignInVisibility);
  const signinClickVisibility = useSelector(selectClickSignInVisibility);
  // const currentUser = useSelector(selectCurrentUser)


  

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
            <DropdownWithTransitions
              isActive={
                signinClickVisibility
                  ? signinClickVisibility
                  : signinHoverVisibility
              }
              icon={<UserIconButton>account_circle</UserIconButton>}
              dropdownEl={<UserDropdown margin="55" />}
              name="signIn"
              clickStatus={signinClickVisibility}
            />
            <DropdownWithTransitions
              isActive={
                cartClickVisibility 
                ? cartClickVisibility 
                : cartHoverVisibility
              }
              icon={<CartIcon />}
              dropdownEl={<CartDropdown margin="0" />}
              name="cart"
              clickStatus={cartClickVisibility}
            />
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

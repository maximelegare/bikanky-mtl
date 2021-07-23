import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSliderVisibility } from "../../../redux/side-slider/side-slider.selectors";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import { toggleSliderVisibility } from "../../../redux/side-slider/side-slider.slice";

import { CSSTransition } from "react-transition-group";
import {
  SideSliderStylesContainer,
  BackgroundStylesContainer,
  MobileOptionsContainer,
  ButtonContainer,
} from "./side-slider.styles";
import LoggedInSliderInfos from "../logged-in-infos/logged-in-infos.component";
import SliderOptionsLink from "../side-slider-options-link/side-slider-options-link.component";
import CartSideSliderMobile from "../../cart/cart-slider-mobile/cart-slider-mobile.component";
import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";
import { PropTypes } from "prop-types";
import CustomButton from "../../buttons/my-buttons/customButtons/custom-button.component";
import { auth } from "../../../firebase/firebase.utils";
import { withRouter } from "react-router";


const SideSlider = ({ history }) => {
  const sliderVisibility = useSelector(selectSliderVisibility);
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();

  const nodeRef = useRef();

  const handleClick = () => {
    if (currentUser) {
      auth.signOut();
    } else {
      history.push("/signin");
    }
    dispatch(toggleSliderVisibility());
  };

  return (
    <div style={{ position: "fixed" }}>
      <CSSTransition
        in={sliderVisibility}
        timeout={500}
        classNames="slider"
        unmountOnExit={true}
        nodeRef={nodeRef}
      >
        <SideSliderStylesContainer ref={nodeRef}>
          <MobileOptionsContainer>
            <LoggedInSliderInfos />
            <SliderOptionsLink route="/creations" title="Créations" />
            <SliderOptionsLink route="/services" title="Services" />
            <SliderOptionsLink route="/about" title="À Propos" />
            {/* <SliderOptionsLink route="/contact" title="Contact" /> */}
            <CartSideSliderMobile />
          </MobileOptionsContainer>
          <ButtonContainer>
            <CustomButtonMUI>Go to checkout</CustomButtonMUI>
          </ButtonContainer>
          <ButtonContainer onClick={() => handleClick()}>
            <CustomButton
              title={currentUser ? "Sign out" : "Sign in"}
              kind="text"
            />
          </ButtonContainer>
        </SideSliderStylesContainer>
      </CSSTransition>
      {sliderVisibility ? (
        <BackgroundStylesContainer
          isVisible={selectSliderVisibility}
          onClick={() => dispatch(toggleSliderVisibility())}
        />
      ) : null}
    </div>
  );
};

SideSlider.propTypes = {
  children: PropTypes.any,
  history: PropTypes.object,
};

export default withRouter(SideSlider);

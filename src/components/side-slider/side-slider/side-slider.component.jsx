import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSliderVisibility } from "../../../redux/side-slider/side-slider.selectors";
import { toggleSliderVisibility } from "../../../redux/side-slider/side-slider.slice";

import { CSSTransition } from "react-transition-group";
import {
  SideSliderStylesContainer,
  BackgroundStylesContainer,
} from "./side-slider.styles";
import { PropTypes } from "prop-types";


const SideSlider = ({children}) => {
  const sliderVisibility = useSelector(selectSliderVisibility);
  const dispatch = useDispatch();

  const nodeRef = useRef();
  return (
    <div style={{ position: "fixed" }}>
      <CSSTransition
        in={sliderVisibility}
        timeout={500}
        classNames="slider"
        unmountOnExit={true}
        nodeRef={nodeRef}
      >
        <SideSliderStylesContainer ref={nodeRef} >{children}</SideSliderStylesContainer>
      </CSSTransition>
      {sliderVisibility ? <BackgroundStylesContainer isVisible={selectSliderVisibility} onClick={() => dispatch(toggleSliderVisibility())}/> : null}
    </div>
  );
};

SideSlider.propTypes = {
  children:PropTypes.any
};

export default SideSlider;

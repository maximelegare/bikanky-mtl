import React from "react";
import { OptionsLinkSlider } from "./side-slider-options-link.styles";
import { useDispatch } from "react-redux";
import { toggleSliderVisibility } from "../../../redux/side-slider/side-slider.slice";
import { PropTypes } from "prop-types";

const SliderOptionsLink = ({ route, title }) => {
  const dispatch = useDispatch();
  return (
    <OptionsLinkSlider
      activeClassName="active"
      to={route}
      onClick={() => dispatch(toggleSliderVisibility())}
    >
      {title}
    </OptionsLinkSlider>
  );
};

SliderOptionsLink.propTypes = {
  route: PropTypes.string,
  title: PropTypes.string,
};

export default SliderOptionsLink;

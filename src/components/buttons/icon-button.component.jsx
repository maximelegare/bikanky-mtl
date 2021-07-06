import React from "react";
import { IconButtonContainer,IconWrapperContainer } from "./buttons.styles";
import { PropTypes } from "prop-types";


const IconButton = ({ icon }) => (
  <IconWrapperContainer >
    <IconButtonContainer className="material-icons">{icon}</IconButtonContainer>
  </IconWrapperContainer>
);

IconButton.propTypes = {
  icon: PropTypes.string,

};

export default IconButton;

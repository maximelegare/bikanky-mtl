import React from "react";
import { IconButtonContainer,IconWrapperContainer } from "./icon-button.styles";
import { PropTypes } from "prop-types";

// eslint-disable-next-line react/prop-types
const IconButton = ({ icon, size }) => (
  <IconWrapperContainer size={size}>
    <IconButtonContainer className={`material-icons`}>{icon}</IconButtonContainer>
  </IconWrapperContainer>
);

IconButton.propTypes = {
  name: PropTypes.string,
};

export default IconButton;

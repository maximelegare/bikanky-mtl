import React from "react";
import { PropTypes } from "prop-types";

import {
  ButtonWrapperContainer,
  TextContainer,
  IconContainer,
} from "./custom-button.styles";

const CustomButton = ({ icon, title }) => {
  return (
    <ButtonWrapperContainer>
      <TextContainer>{title}</TextContainer>
      <IconContainer className="material-icons">{icon}</IconContainer>
    </ButtonWrapperContainer>
  );
};

CustomButton.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string
};

export default CustomButton;

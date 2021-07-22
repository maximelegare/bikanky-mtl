import React from "react";
import { PropTypes } from "prop-types";

import {
  ButtonWrapperContainer,
  TextContainer,
  IconContainer,
} from "./custom-button.styles";

const CustomButton = ({ icon, title, accent }) => {
  return (
    <ButtonWrapperContainer accent={accent}>
      <TextContainer>{title}</TextContainer>
      <IconContainer className="material-icons">{icon}</IconContainer>
    </ButtonWrapperContainer>
  );
};

CustomButton.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  accent:PropTypes.bool
};

export default CustomButton;

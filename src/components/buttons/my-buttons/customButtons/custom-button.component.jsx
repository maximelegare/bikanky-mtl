import React from "react";
import { PropTypes } from "prop-types";

import {
  ButtonWrapperContainer,
  TextContainer,
  IconContainer,
  TextButtonContainer
} from "./custom-button.styles";

const CustomButton = ({ icon, title, kind, color }) => {
  switch (kind) {
    case "text":
      return(
        <TextButtonContainer color={color}>
          {title}
        </TextButtonContainer>
      )
    default:
      return (
        <ButtonWrapperContainer color={color}>
          <TextContainer>{title}</TextContainer>
          <IconContainer className="material-icons">{icon}</IconContainer>
        </ButtonWrapperContainer>
      );
  }
};

CustomButton.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  kind: PropTypes.string,
  color: PropTypes.string
};

export default CustomButton;

import React from "react";
import { PropTypes } from "prop-types";

import {
  ButtonWrapperContainer,
  TextContainer,
  IconContainer,
  TextButtonContainer
} from "./custom-button.styles";

const CustomButton = ({ icon, title, accent, kind }) => {
  switch (kind) {
    case "text":
      return(
        <TextButtonContainer>
          {title}
        </TextButtonContainer>
      )
    default:
      return (
        <ButtonWrapperContainer accent={accent}>
          <TextContainer>{title}</TextContainer>
          <IconContainer className="material-icons">{icon}</IconContainer>
        </ButtonWrapperContainer>
      );
  }
};

CustomButton.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  accent: PropTypes.bool,
  kind: PropTypes.string,
};

export default CustomButton;

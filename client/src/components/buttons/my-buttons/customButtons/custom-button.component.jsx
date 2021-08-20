import React from "react";
import { PropTypes } from "prop-types";

import {
  ButtonWrapperContainer,
  TextContainer,
  IconContainer,
  TextButtonContainer,
  TextLinkContainer,
  
} from "./custom-button.styles";

const CustomButton = ({ icon, title, kind, color,linkUrl  }) => {
  switch (kind) {
    case "text":
      return <TextButtonContainer color={color}>{title}</TextButtonContainer>;
    case "text-link":
      return <TextLinkContainer to={linkUrl}>{title}</TextLinkContainer>;
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
  color: PropTypes.string,
  linkUrl:PropTypes.string
};

export default CustomButton;

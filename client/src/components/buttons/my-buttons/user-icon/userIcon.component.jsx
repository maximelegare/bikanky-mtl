// icon of the user visible in the header
import React from "react";
import { UserIconContainer } from "./userIcon.styles";
import { PropTypes } from "prop-types";

const UserIconButton = ({ children }) => {
  return (
    <UserIconContainer className="material-icons">{children}</UserIconContainer>
  );
};

UserIconButton.propTypes = {
  children: PropTypes.string,
};

export default UserIconButton;

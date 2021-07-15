import React from "react";
import { UserIconContainer } from "./userIcon.styles";
import { PropTypes } from "prop-types";

// import { selectSignInVisibility } from "../../../redux/dropdown-elements-visibility/dropdown.selector";

const UserIconButton = ({ children }) => {
  // const signInVisibility = useSelector(selectSignInVisibility);

  return (
    <UserIconContainer
      
      className="material-icons"
    >
      {children}
    </UserIconContainer>
  );
};

UserIconButton.propTypes = {
  children: PropTypes.string,
};

export default UserIconButton;

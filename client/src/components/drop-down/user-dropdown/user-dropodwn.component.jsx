import React from "react";
import Dropdown from "../dropdown-bones/drop-down.component";
import { PropTypes } from "prop-types";
import SigninAndSignupDropdown from "./signin-signup-dropdown/signin-signup-dropdown.component";
import IsSignInUserDropdown from "./is-sign-in-dropdown/is-sign-in-dropdown.component";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/user/user.selector";

const UserDropdown = ({ isActive, margin }) => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <Dropdown isActive={isActive} margin={margin}>
        {/* <SigninAndSignupDropdown /> */}
      {currentUser ? <IsSignInUserDropdown currentUser={currentUser}/> : <SigninAndSignupDropdown />}
    </Dropdown>
  );
};

UserDropdown.propTypes = {
  isActive: PropTypes.bool,
  margin: PropTypes.string,
};

export default UserDropdown;

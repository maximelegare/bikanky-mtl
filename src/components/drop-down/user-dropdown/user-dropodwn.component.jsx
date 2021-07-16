import React from "react";
import Dropdown from "../dropdown-bones/drop-down.component";
import { PropTypes } from "prop-types";
import SigninAndSignupDropdown from "./signin-signup-dropdown/signin-signup-dropdown.component";

const UserDropdown = ({ isActive, margin }) => {
  return (
    <Dropdown isActive={isActive} margin={margin}>
      <SigninAndSignupDropdown />
    </Dropdown>
  );
};

UserDropdown.propTypes = {
  isActive: PropTypes.bool,
  margin: PropTypes.string,
};

export default UserDropdown;

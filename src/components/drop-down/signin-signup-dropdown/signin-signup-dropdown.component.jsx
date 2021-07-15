import React from "react";
import Dropdown from "../dropdown-bones/drop-down.component";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import {
  SignWrapperContainer,
  ContentWrapperContainer,
} from "./signin-signup-dropdown.styles";

import CustomButton from "../../buttons/material-ui/custombutton.component";

const SigninAndSignupDropdown = ({ isActive, margin }) => {
  return (
    <Dropdown isActive={isActive} margin={margin}>
      <SignWrapperContainer>
        <ContentWrapperContainer>
          <CustomButton type="link" routeName="/signin">
            Sign In
          </CustomButton>
          <h5>
            New customer?{" "}
            <span>
              <Link to="/signup">Start here</Link>
            </span>
          </h5>
        </ContentWrapperContainer>
      </SignWrapperContainer>
    </Dropdown>
  );
};

SigninAndSignupDropdown.propTypes = {
  isActive: PropTypes.bool,
  margin: PropTypes.string,
};

export default SigninAndSignupDropdown;

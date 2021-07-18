import React from "react";
import Dropdown from "../../dropdown-bones/drop-down.component";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import {
  SignWrapperContainer,
  ContentWrapperContainer,
} from "./signin-signup-dropdown.styles";

import { useDispatch } from "react-redux";
import { toggleHoverDropdownVisibility } from "../../../../redux/dropdown-elements-visibility/dropdown.slice";
import { toggleClickDropdownVisibility } from "../../../../redux/dropdown-elements-visibility/dropdown.slice";

import CustomButton from "../../../buttons/material-ui/custombutton.component";

const SigninAndSignupDropdown = ({ isActive, margin }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      toggleHoverDropdownVisibility({
        dropdownName: "signIn",
        value: false,
      })
    );
    dispatch(
      toggleClickDropdownVisibility({
        dropdownName: "signIn",
        value: false,
      })
    );
  };

  return (
    <Dropdown isActive={isActive} margin={margin}>
      <SignWrapperContainer>
        <ContentWrapperContainer>
          {/* the name props is to identify the button to it's dropdown in the reducer to close the dropdown */}
          <div onClick={() => handleClick()}>
            <CustomButton
              type="button"
              kind="link"
              routeName="/signin"
              name="signIn"
            >
              Sign In
            </CustomButton>
          </div>
          <h5>
            New customer?{" "}
            <span onClick={() => handleClick()}>
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

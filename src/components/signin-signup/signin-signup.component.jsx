import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { PropTypes } from "prop-types";
import {
  WrapperContainer,
  InputSectionContainer,
  ButtonSectionContainer,
  TitleContainer,
  ChangePageContainter
} from "./signin-signup.styles";

import FormInput from "../form-inputs/form-input.component";
import CustomButton from "../buttons/material-ui/custombutton.component";

//  user credentials
const SigninSignup = ({ match }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    newUser: false,
  });

  const { email, password, confirmPassword, newUser } = credentials;

  // change newUser property depending on the page
  useEffect(() => {
    if (match.url === "/signup") {
      setCredentials({ ...credentials, newUser: true });
    } else {
      setCredentials({ ...credentials, newUser: false });
    }
  }, [match.url]);

  // handle submit event
  const handleSubmit = (e) => {
    e.preventDefault;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <WrapperContainer>
      <form onSubmit={() => handleSubmit}>
        <InputSectionContainer>
          <TitleContainer>
            <h3>{newUser ? "Create your account!" : "Welcome Back!"}</h3>
          </TitleContainer>
          <FormInput
            type="email"
            label="Email"
            name="email"
            value={email}
            handleChange={handleChange}
          />

          <FormInput
            type="password"
            label="Password"
            name="email"
            value={password}
            handleChange={handleChange}
            message={
              newUser
                ? "Your password must consist of at least 6 characters."
                : null
            }
          />

          {match.url === "/signup" ? (
            <FormInput
              type="password"
              label="Confirm Password"
              name="email"
              value={confirmPassword}
              handleChange={handleChange}
            />
          ) : null}
          <ButtonSectionContainer>
            <CustomButton>{newUser ? "Sign up" : "Sign in"}</CustomButton>
          </ButtonSectionContainer>
          <ChangePageContainter>
          <hr/>
            {newUser ? (
              <h5>
                Already have an account?{" "}
                <span>
                  <Link to="/signin">Sign in here</Link>
                </span>
              </h5>
            ) : (
              <h5>
                New here?{" "}
                <span>
                  <Link to="/signup">Start here</Link>
                </span>
              </h5>
            )}
          </ChangePageContainter>
        </InputSectionContainer>
      </form>
    </WrapperContainer>
  );
};

SigninSignup.propTypes = {
  match: PropTypes.object,
};

export default withRouter(SigninSignup);

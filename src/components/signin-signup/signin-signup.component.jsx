import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { PropTypes } from "prop-types";
import {
  WrapperContainer,
  InputSectionContainer,
  ButtonSectionContainer,
  TitleContainer,
  ChangePageContainter,
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
    error: {
      email: null,
      password: null,
      confirmPassword: null,
    },
  });

  const { email, password, confirmPassword, newUser, error } = credentials;

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
    e.preventDefault();
    
    if (!email || !password || !confirmPassword) {
      setCredentials({ ...credentials, error: { password: "error" } });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const removeError = (name) => {
    setCredentials({ ...credentials, error: { [name]: null } });
  };

  return (
    <WrapperContainer>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <InputSectionContainer>
          <TitleContainer>
            <h3>{newUser ? "Create your account!" : "Welcome Back!"}</h3>
          </TitleContainer>
          <FormInput
            error={error.email}
            type="email"
            label="Email"
            name="email"
            value={email}
            handleChange={handleChange}
            removeError={removeError}
          />

          <FormInput
            error={error.password}
            type="password"
            label="Password"
            name="password"
            value={password}
            handleChange={handleChange}
            removeError={removeError}
            message={
              newUser
                ? "Your password must consist of at least 6 characters."
                : null
            }
          />

          {match.url === "/signup" ? (
            <FormInput
              error={error.confirmPassword}
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              handleChange={handleChange}
              removeError={removeError}
            />
          ) : null}
          <ButtonSectionContainer>
            <CustomButton type="submit">
              {newUser ? "Sign up" : "Sign in"}
            </CustomButton>
          </ButtonSectionContainer>
          <ChangePageContainter>
            <hr />
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
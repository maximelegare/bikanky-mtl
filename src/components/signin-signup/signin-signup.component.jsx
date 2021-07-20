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
import CustomButtonMUI from "../buttons/material-ui/custom-button-mui.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";


//  user credentials
const SigninSignup = ({ match }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    newUser: false,
    errors: {
      email: null,
      password: null,
      confirmPassword: null,
    },
  });

  const { email, password, confirmPassword, newUser, errors } = credentials;

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
    const isValid = validate();

    console.log(isValid)
  };

  const validate = () => {
    var messageObj = {};

    if (!email || !email.includes("@") || !email.includes(".")) {
      messageObj.email = "Please enter your email";
    }
    if (!password) {
      messageObj.password = "Please enter your password";
    }
    if (password <= 6) {
      messageObj.password =
        "Your password must consist of at least 6 characters";
    }
    if (!confirmPassword || confirmPassword !== password) {
      messageObj.confirmPassword = "Your password and password validation must match";
    }

    setCredentials({
      ...credentials,
      errors: {
        email: messageObj.email,
        password: messageObj.password,
        confirmPassword: messageObj.confirmPassword,
      },
    });
    if (messageObj.email || messageObj.password || messageObj.confirmPassword) {
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const removeError = (name) => {
    console.log(name);
    setCredentials({ ...credentials, errors: { ...errors, [name]: null } });
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
            error={errors.email}
            type="email"
            label="Email"
            name="email"
            value={email}
            handleChange={handleChange}
            removeError={removeError}
          />

          <FormInput
            error={errors.password}
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
              error={errors.confirmPassword}
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              handleChange={handleChange}
              removeError={removeError}
            />
          ) : null}
          <ButtonSectionContainer>
            <CustomButtonMUI type="submit">
              {newUser ? "Sign up" : "Sign in"}
            </CustomButtonMUI>
          </ButtonSectionContainer>
          <ButtonSectionContainer onClick={signInWithGoogle} style={{marginTop:"15px"}}>
            <CustomButtonMUI kind="signInWithGoogle">
              Sign in with google
            </CustomButtonMUI>
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

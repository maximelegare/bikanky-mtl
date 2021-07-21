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

import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
} from "../../firebase/firebase.utils";

import { errMessages } from "./signin-signup.utils";

//  user credentials
const SigninSignup = ({ match, history }) => {
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

  // ////////////////////////////////

  // handle submit event
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = validate();
    console.log(isValid);

    if (!isValid) return;

    // if it's a new user, create new account
    if (newUser) {
      try {
        const { user } = await auth.createUserWithEmailAndPassword(
          email,
          password
        );
        await createUserProfileDocument(user);
        resetCredentials();
        history.push("/");

        return;
      } catch (err) {
        console.log(err);
        return;
      }
    }
    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetCredentials();
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  // reset the credentials
  const resetCredentials = () => {
    setCredentials({
      ...credentials,
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  // ////////////////////////////////

  // validate the inputs with external util
  const validate = () => {
    const messageObj = errMessages(email, password, confirmPassword, newUser);
    // sets the errors if that's the case
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

  // ////////////////////////////////

  // handles change of inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // removes error with onBlur event. the key is dynamic (renders the name of the input)
  const removeError = (name) => {
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

          {newUser ? (
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

          <ButtonSectionContainer
            onClick={signInWithGoogle}
            style={{ marginTop: "15px" }}
          >
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
  history: PropTypes.object,
};

export default withRouter(SigninSignup);

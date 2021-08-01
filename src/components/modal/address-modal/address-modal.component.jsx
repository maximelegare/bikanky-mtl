/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ModalComponent from "../modal.component";
import FormInput from "../../form-inputs/form-input.component";
import { PropTypes } from "prop-types";

import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";

import { InputSectionContainer, TitleModalContainer, ButtonSectionContainer } from "./address-modal.styles";

const AddressModal = ({ userAddress, ...otherProps }) => {
  // User credentials and errors
  const [credentials, setCredentials] = useState({
    country: "",
    fullName: "",
    AddressLine: "",
    city: "",
    state: "",
    postalCode: "",
    phoneNumber: "",
    errors: {
      country: null,
      fullName: null,
      AddressLine: null,
      city: null,
      state: null,
      postalCode: null,
      phoneNumber: null,
    },
  });
  const {
    country,
    fullName,
    AddressLine,
    city,
    state,
    postalCode,
    phoneNumber,
    errors,
  } = credentials;


  //   handle the submit event
  const handleSubmit = (e) => {
      e.preventDefault()
  };

  //   handle change event. the key is dynamic using the name and value provided
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  // removes error with onBlur event. the key is dynamic (renders the name of the input)
  const removeError = (name) => {
    setCredentials({ ...credentials, errors: { ...errors, [name]: null } });
  };



  return (
    <ModalComponent {...otherProps}>
      <form onSubmit={handleSubmit}>
        <TitleModalContainer>
          <h3>Add an address</h3>
        </TitleModalContainer>
        <InputSectionContainer>
          <FormInput
            error={errors.country}
            type="text"
            label="Country"
            name="country"
            value={country}
            handleChange={handleChange}
            removeError={removeError}
            autoFocus
          />
          <FormInput
            error={errors.fullName}
            type="text"
            label="Full name (First and last Name)"
            name="fullName"
            value={fullName}
            handleChange={handleChange}
            removeError={removeError}
          />
          <FormInput
            error={errors.AddressLine}
            type="text"
            label="Address Line"
            name="AddressLine"
            value={AddressLine}
            handleChange={handleChange}
            removeError={removeError}
          />
          <FormInput
            error={errors.city}
            type="city"
            label="City"
            name="city"
            value={city}
            handleChange={handleChange}
            removeError={removeError}
          />
          <FormInput
            error={errors.state}
            type="state"
            label="State/Province/Region"
            name="state"
            value={state}
            handleChange={handleChange}
            removeError={removeError}
          />
          <FormInput
            error={errors.postalCode}
            type="postalCode"
            label="Postal Code/ZIP"
            name="postalCode"
            value={postalCode}
            handleChange={handleChange}
            removeError={removeError}
          />
          <FormInput
            error={errors.phoneNumber}
            type="phoneNumber"
            label="Phone number"
            name="phoneNumber"
            value={phoneNumber}
            handleChange={handleChange}
            removeError={removeError}
          />

          <ButtonSectionContainer>
            <CustomButtonMUI type="submit">
              {/* {newUser ? "Sign up" : "Sign in"} */}
              Confirm
            </CustomButtonMUI>
          </ButtonSectionContainer>

          {/* <ButtonSectionContainer
            onClick={signInWithGoogle}
            style={{ marginTop: "15px" }}
          >
            <CustomButtonMUI kind="signInWithGoogle">
              Sign in with google
            </CustomButtonMUI>
          </ButtonSectionContainer> */}
        </InputSectionContainer>
      </form>
    </ModalComponent>
  );
};

AddressModal.propTypes = {
  userAddress: PropTypes.shape({
    country: PropTypes.string,
    fullName: PropTypes.string,
    AddressLine: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postalCode: PropTypes.string,
    phoneNumber: PropTypes.string,
  }),
};

export default AddressModal;

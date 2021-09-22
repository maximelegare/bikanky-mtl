import React, { useState } from "react";
import ModalComponent from "../modal.component";
import FormInput from "../../form-inputs/form-input.component";
import { PropTypes } from "prop-types";
import { addShippingAddress } from "../../../firebase/firebase.utils";
import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/user/user.selector";
import { setModalVisibility } from "../../../redux/modal-elements-visibility/modal.slice";
import { useDispatch } from "react-redux";

import WithAnimation from "../../_HOC/with-animation/with-animation.component";

import {
  InputSectionContainer,
  TitleModalContainer,
  ButtonSectionContainer,
} from "./address-modal.styles";

import { errMessages } from "./address-modal.utils";

const AddressModal = ({ userAddress, modalName, ...otherProps }) => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch()


  // User address state
  const [address, setAddress] = useState({
    country: userAddress?.country ?? "",
    fullName: userAddress?.fullName ?? "",
    addressLine: userAddress?.addressLine ?? "",
    city: userAddress?.city ?? "",
    state: userAddress?.state ?? "",
    postalCode: userAddress?.postalCode ?? "",
    phoneNumber: userAddress?.phoneNumber ?? "",
  });

  // address errors state
  const [errors, setErrors] = useState({
    country: null,
    fullName: null,
    addressLine: null,
    city: null,
    state: null,
    postalCode: null,
    phoneNumber: null,
  });

  // deconstruct address
  const {
    country,
    fullName,
    addressLine,
    city,
    state,
    postalCode,
    phoneNumber,
  } = address;

  ////////////////////////////////////////////////

  //   handle the submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    // validate the form
    const isValid = validate();
    // the form is not valid, return
    if (!isValid) return;

    // otherwise add the shipping addressks
    addShippingAddress(currentUser.id, address, currentUser);
    // close the modal in the parent component 
    dispatch(setModalVisibility({modalName, visibility:false}))
  };

  ////////////////////////////////////////////////

  // validate the form in [address-modal.utils.js]
  const validate = () => {
    // errors from the utils
    const {
      country,
      fullName,
      addressLine,
      city,
      state,
      postalCode,
      phoneNumber,
    } = errMessages(address);
    // sets the errors in errors state
    setErrors({
      country,
      fullName,
      addressLine,
      city,
      state,
      postalCode,
      phoneNumber,
    });
    // if any errors, return false
    if (
      country ||
      fullName ||
      addressLine ||
      city ||
      state ||
      postalCode ||
      phoneNumber
    ) {
      return false;
    }
    return true;
  };

  ////////////////////////////////////////////////

  //   handle change event. the key is dynamic using the name and value provided
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  ////////////////////////////////////////////////

  // removes error with onBlur event. the key is dynamic (renders the name of the input)
  const removeError = (name) => {
    setErrors({ ...errors, [name]: null });
  };

  return (
    <ModalComponent {...otherProps} modalName={modalName}>
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
            error={errors.addressLine}
            type="text"
            label="Address Line"
            name="addressLine"
            value={addressLine}
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
            value={postalCode.toUpperCase()}
            handleChange={handleChange}
            removeError={removeError}
            maxLength={6}
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
            <CustomButtonMUI type="submit">Confirm</CustomButtonMUI>
          </ButtonSectionContainer>
        </InputSectionContainer>
      </form>
    </ModalComponent>
  );
};

AddressModal.propTypes = {
  userAddress: PropTypes.shape({
    country: PropTypes.string,
    fullName: PropTypes.string,
    addressLine: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postalCode: PropTypes.string,
    phoneNumber: PropTypes.string,
  }),
  closeModal: PropTypes.func,
  modalName:PropTypes.string
};

export default WithAnimation(AddressModal);

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { PropTypes } from "prop-types";
import ModalComponent from "../modal.component";

import WithConfirmationModalTest from "../../_HOC/with-confirmation-modal/with-confirmation-modal-test.component";

import WithAnimation from "../../_HOC/with-animation/with-animation.component";

import { capitalizeString } from "../../../_string-utilites/string-utilites";

import { InputSectionContainer } from "../address-modal/address-modal.styles";
import { ButtonSectionContainer } from "../address-modal/address-modal.styles";
import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setModalVisibility } from "../../../redux/modal-elements-visibility/modal.slice";
import { selectNewCategoryModalVisibility } from "../../../redux/modal-elements-visibility/modal.selector";

import { newCategoryErrors } from "../admin-modal.utils";

import { createNewItemCategory } from "../../../firebase/firebase.utils";

import FormInput from "../../form-inputs/form-input.component";

const AdminCategoryModal = ({ modalName, ...otherProps }) => {
  // initital values of the inputs
  const [categorySpecifications, setCategorySpecifications] = useState({
    categoryName: "",
  });
  const { categoryName } = categorySpecifications;

  // initial errors values
  const [errors, setErrors] = useState({
    categoryName: null,
  });

  const dispatch = useDispatch();

  /////////////////////////////////
  //    HANDLE CHANGE EVENTS     //
  ////////////////////////////////
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.value);
    setCategorySpecifications({ ...categorySpecifications, [name]: value });
  };


   /////////////////////////////////
  //    HANDLE SUBMIT EVENTS     //
  ////////////////////////////////

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate the form
    const isValid = validate();
    // // the form is not valid, return
    if (!isValid) return;
    // create an item to add to firebase depending if it's a new item or a new category
    const capitalizedTitle = capitalizeString(categoryName);
    const item = {
      title: capitalizedTitle,
      dbTitle: categoryName.toLocaleLowerCase(),
    };

    createNewItemCategory(item);

    // close the modal with redux action
    dispatch(setModalVisibility({ modalName, visibility: false }));
  };


 /////////////////////////////////
  //       HANDLE ERRORS        //
  ////////////////////////////////

  const validate = () => {
    // errors from the utils
    const { categoryName } = newCategoryErrors(categorySpecifications);

    // sets the errors in errors state
    setErrors({
      categoryName,
    });

    // if any errors, return false
    if (categoryName) {
      return false;
    }
    return true;
  };

  // removes the errors with blur event
  const removeError = (name) => {
    setErrors({ ...errors, [name]: null });
  };
  console.log(modalName)
  return (
    <ModalComponent modalName={modalName} {...otherProps}>
      <form onSubmit={handleSubmit}>
        <InputSectionContainer>
          <FormInput
            error={errors.categoryName}
            type="text"
            label="Category"
            name="categoryName"
            value={categoryName}
            handleChange={handleChange}
            removeError={removeError}
            autoFocus
          />
          <ButtonSectionContainer>
            <div>
              <CustomButtonMUI type="submit">Create</CustomButtonMUI>
            </div>
          </ButtonSectionContainer>
        </InputSectionContainer>
      </form>
    </ModalComponent>
  );
};

AdminCategoryModal.propTypes = {
  modalName: PropTypes.string,
};

export default WithAnimation(WithConfirmationModalTest(AdminCategoryModal));

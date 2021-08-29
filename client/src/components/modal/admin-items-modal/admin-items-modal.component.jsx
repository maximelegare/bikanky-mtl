import React, { useState } from "react";
import { PropTypes } from "prop-types";

import ModalComponent from "../modal.component";
import { InputSectionContainer } from "../address-modal/address-modal.styles";
import FormInput from "../../form-inputs/form-input.component";
import { ButtonSectionContainer } from "../address-modal/address-modal.styles";
import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";
import {
  InputFlexContainer,
  BulletPointsContainer,
  BulletPointFlexContainer,
} from "./admin-items-modal.styles";

const AdminItemsModal = ({ item, ...otherProps }) => {
  // User address state

  // eslint-disable-next-line no-unused-vars
  const [itemSpecifications, setItemSpecifications] = useState({
    title: item?.title ?? "",
    price: item?.price ?? "",
    stock: item?.stock ?? "",
    shortDescription: item?.shortDescription ?? "",
    bulletPoints: item?.bulletPoints ?? [],
    newBulletPoint: "",
    // phoneNumber: userAddress?.phoneNumber ?? "",
  });

  // address errors state

  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({
    title: null,
    price: null,
    stock: null,
    shortDescription: null,
    bulletPoints: null,
    newBulletPoint: null,
  });

  // deconstruct address
  const {
    title,
    price,
    stock,
    shortDescription,
    bulletPoints,
    newBulletPoint,
  } = itemSpecifications;

  ////////////////////////////////////////////////

  //   handle the submit event

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate the form
    // const isValid = validate();
    // // the form is not valid, return
    // if (!isValid) return;

    // // otherwise add the shipping address
    // addShippingAddress(currentUser.id, address, currentUser);
    // // close the modal in the parent component
    // closeModal(false);
  };

  ////////////////////////////////////////////////

  // validate the form in [address-modal.utils.js]

  //   const validate = () => {
  //     // errors from the utils
  //     const {
  //       country,
  //       fullName,
  //       addressLine,
  //       city,
  //       state,
  //       postalCode,
  //       phoneNumber,
  //     } = errMessages(address);

  // sets the errors in errors state

  // setErrors({
  //   country,
  //   fullName,
  //   addressLine,
  //   city,
  //   state,
  //   postalCode,
  //   phoneNumber,
  // });

  // if any errors, return false

  // if (
  //   country ||
  //   fullName ||
  //   addressLine ||
  //   city ||
  //   state ||
  //   postalCode ||
  //   phoneNumber
  // ) {
  //   return false;
  // }
  // return true;

  //   };

  ////////////////////////////////////////////////

  //   handle change event. the key is dynamic using the name and value provided
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemSpecifications({ ...itemSpecifications, [name]: value });
  };

  ///////////////////////////////////////////////
  // handle adding and deleting bullet points

  const handleClickAddBullet = () => {
    setItemSpecifications({
      ...itemSpecifications,
      bulletPoints: [...bulletPoints, newBulletPoint],
    });
  };

  const handleClickDeleteBullet = (e) => {
     console.log(e.target.name)   

     const buttonValue =  e.target.name
     const newButtonArray = bulletPoints.filter((_, idx) => idx !== buttonValue )
     setItemSpecifications({
        ...itemSpecifications,
        bulletPoints: newButtonArray,
      });
  };

  ////////////////////////////////////////////////

  // removes error with onBlur event. the key is dynamic (renders the name of the input)

  const removeError = (name) => {
    // setErrors({ ...errors, [name]: null });
  };

  return (
    <ModalComponent {...otherProps}>
      <form onSubmit={handleSubmit}>
        <InputSectionContainer>
          <FormInput
            error={errors.title}
            type="text"
            label="Title"
            name="title"
            value={title}
            handleChange={handleChange}
            removeError={removeError}
            autoFocus
          />
          <InputFlexContainer>
            <FormInput
              error={errors.price}
              type="number"
              label="Price"
              name="price"
              value={price}
              handleChange={handleChange}
              removeError={removeError}
            />
            <FormInput
              error={errors.stock}
              type="number"
              label="Stock quantity"
              name="stock"
              value={stock}
              handleChange={handleChange}
              removeError={removeError}
            />
          </InputFlexContainer>
          <FormInput
            error={errors.shortDescription}
            type="text"
            label="Short Description"
            name="shortDescription"
            value={shortDescription}
            handleChange={handleChange}
            removeError={removeError}
            multiline
            rows={4}
          />
          <InputFlexContainer>
            <FormInput
              error={errors.bulletPoints}
              type="text"
              name="newBulletPoint"
              label="Bullet points"
              value={newBulletPoint}
              handleChange={handleChange}
              removeError={removeError}
              multiline
              rows={2}
            />
            <div style={{ marginTop: "40px" }} onClick={handleClickAddBullet}>
              <CustomButtonMUI inline kind="icon-color">
                add
              </CustomButtonMUI>
            </div>
          </InputFlexContainer>
          <BulletPointsContainer>
            <ul>
              {bulletPoints.map((bullet, idx) => {
                  return(
                <li key={idx}>
                  <BulletPointFlexContainer>
                    <span>{bullet}</span>
                    <div onClick={handleClickDeleteBullet}>
                        {/* <button name={idx}>clear</button> */}
                        <CustomButtonMUI kind="icon" deleteIcon>clear</CustomButtonMUI>
                    </div>
                  </BulletPointFlexContainer>
                </li>
              )})}
            </ul>
          </BulletPointsContainer>

          <ButtonSectionContainer>
            <CustomButtonMUI type="submit">Confirm</CustomButtonMUI>
          </ButtonSectionContainer>
        </InputSectionContainer>
      </form>
    </ModalComponent>
  );
};

AdminItemsModal.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
    shortDescription: PropTypes.string,
    bulletPoints: PropTypes.array,
  }),
};

export default AdminItemsModal;

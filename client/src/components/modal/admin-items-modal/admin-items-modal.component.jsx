/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { PropTypes } from "prop-types";

import { capitalizeString } from "../../_string-utilites/string-utilites";

import { createNewItemCategory, createNewItem } from "../../../firebase/firebase.utils";

import FormSelect from "../../form-select/form-select.component";
import ModalComponent from "../modal.component";
import { InputSectionContainer } from "../address-modal/address-modal.styles";
import FormInput from "../../form-inputs/form-input.component";
import { ButtonSectionContainer } from "../address-modal/address-modal.styles";
import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";
import CustomButton from "../../buttons/my-buttons/customButtons/custom-button.component";
import {
  InputFlexContainer,
  BulletPointsContainer,
  BulletPointFlexContainer,
} from "./admin-items-modal.styles";

// eslint-disable-next-line react/prop-types
const AdminItemsModal = ({
  selectInputMenuValues,
  item,
  newItem,
  newCategory,
  setVisibility,
  modalName,
  selectInputDefaultValue,
  ...otherProps
}) => {
  // User address state
  // eslint-disable-next-line no-unused-vars
  const [itemSpecifications, setItemSpecifications] = useState({
    title: item?.title,
    price: item?.price,
    stock: item?.stock,
    shortDescription: item?.shortDescription,
    bulletPoints: item?.bulletPoints,
    newBulletPoint: "",
    newCategoryName: "",
    selectedCategory: selectInputMenuValues??"",
  });

  // sets default values to empty string if it's a new item
  useEffect(() => {
    if (newItem) {
      setItemSpecifications({
        title: "",
        price: "",
        stock: "",
        shortDescription: "",
        bulletPoints: [],
      });
    }
  }, []);

  // address errors state

  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState({
    title: null,
    price: null,
    stock: null,
    shortDescription: null,
    bulletPoints: null,
    newBulletPoint: null,
    newCategoryName: null,
    selectedCategory: null,
  });

  // deconstruct address
  const {
    title,
    price,
    stock,
    shortDescription,
    bulletPoints,
    newBulletPoint,
    newCategoryName,
    selectedCategory,
  } = itemSpecifications;

console.log(selectInputDefaultValue)

  ////////////////////////////////////////////////

  //   handle the submit event

  const handleSubmit = (e) => {
    e.preventDefault();
    

    // create an item to add to firebase depending if it's a new item or a new category
    let item;
    if (newCategory) {
      const newCategoryNameCapitalize = capitalizeString(newCategoryName);
      item = {
        title: newCategoryNameCapitalize,
        dbTitle: newCategoryName.toLocaleLowerCase(),
      };
      createNewItemCategory(item)
    } else {
      const capitalizedTitle = capitalizeString(title);
      item = {
        id: new Date().toISOString(),
        title:capitalizedTitle,
        cartQuantity: 0,
        price,
        bulletPoints,
        routeName: encodeURI(title?.toLowerCase()),
        carouselImages: [],
        collection:selectedCategory,
        imageUrl: "",
        linkUrl: `${encodeURI(selectedCategory)}/${encodeURI(
          title?.toLowerCase()
        )}`,
        shortDescription,
        stock,
      };
      createNewItem(item);
    }
    console.log(item)
    
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
    const buttonValue = e.target.value;
    const newButtonArray = bulletPoints.filter((bullet) => {
      return bullet !== buttonValue;
    });

    console.log(newButtonArray);
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
    <ModalComponent
      {...otherProps}
      modalName={modalName}
      setVisibility={setVisibility}
    >
      <form onSubmit={handleSubmit}>
        <InputSectionContainer>
          {newCategory ? (
            <FormInput
              error={errors.title}
              type="text"
              label="Category"
              name="newCategoryName"
              value={newCategoryName}
              handleChange={handleChange}
              removeError={removeError}
              autoFocus
            />
          ) : (
            <>
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
              <FormSelect
                label="Category"
                name="selectedCategory"
                handleChange={handleChange}
                menuValues={selectInputMenuValues}
                defaultValue={selectInputDefaultValue}
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
                <div
                  style={{ marginTop: "40px" }}
                  onClick={handleClickAddBullet}
                >
                  <CustomButtonMUI inline kind="icon-color">
                    add
                  </CustomButtonMUI>
                </div>
              </InputFlexContainer>
              <BulletPointsContainer>
                <ul>
                  {bulletPoints?.map((bullet, idx) => {
                    return (
                      <li key={idx}>
                        <BulletPointFlexContainer>
                          <span>{bullet}</span>
                          <div onClick={handleClickDeleteBullet}>
                            <CustomButton
                              value={bullet}
                              kind="icon-only"
                              deleteIcon
                              title="clear"
                            ></CustomButton>
                          </div>
                        </BulletPointFlexContainer>
                      </li>
                    );
                  })}
                </ul>
              </BulletPointsContainer>
            </>
          )}
          <ButtonSectionContainer
            onClick={() => setVisibility(false, modalName)}
          >
            <CustomButtonMUI type="submit">
              {newItem || newCategory ? "Create" : "Confirm"}
            </CustomButtonMUI>
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
    newItem: PropTypes.bool,
    newCategory: PropTypes.bool,
  }),
  modalName:PropTypes.string,
  setVisibility:PropTypes.func,
  newCategory:PropTypes.bool,
  newItem:PropTypes.bool,
  selectInputMenuValues:PropTypes.array,
  selectInputDefaultValue:PropTypes.string
};

export default AdminItemsModal;

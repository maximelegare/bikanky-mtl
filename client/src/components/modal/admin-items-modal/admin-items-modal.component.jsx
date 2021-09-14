/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { PropTypes } from "prop-types";

import {
  generateUID,
  capitalizeString,
} from "../../../_string-utilites/string-utilites";

import {
  createNewItemCategory,
  createNewItem,
  createNewStorageImagePath,
  updateFirestoreItem,
  deleteStorageImagePath,
} from "../../../firebase/firebase.utils";

import { InputSectionContainer } from "../address-modal/address-modal.styles";
import { ButtonSectionContainer } from "../address-modal/address-modal.styles";
import {
  InputFlexContainer,
  BulletPointsContainer,
  BulletPointFlexContainer,
} from "./admin-items-modal.styles";

import FormFileInput from "../../form-file-input/form-file-input.component";
import FormSelect from "../../form-select/form-select.component";
import ModalComponent from "../modal.component";
import FormInput from "../../form-inputs/form-input.component";
import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";
import CustomButton from "../../buttons/my-buttons/customButtons/custom-button.component";

// eslint-disable-next-line react/prop-types
const AdminItemsModal = ({
  selectInputMenuValues,
  item,
  newItem,
  newCategory,
  setVisibility,
  modalName,
  categoryId,
  ...otherProps
}) => {
  // User address state
  // eslint-disable-next-line no-unused-vars
  const [itemSpecifications, setItemSpecifications] = useState({
    id: item?.id ?? generateUID(),
    title: item?.title ?? "",
    price: item?.price ?? 0,
    stock: item?.stock ?? 0,
    shortDescription: item?.shortDescription ?? "",
    bulletPoints: item?.bulletPoints ?? [],
    imageUrl: item?.imageUrl ?? {
      fileName: "",
      url: "",
    },
    carouselImages: item?.carouselImages ?? [],
    newBulletPoint: "",
    newCategoryName: "",
    selectedCategory: "",
    selectedCategoryId: "",
    editImagesPage: false,
  });
  // const [previousRouteName, setPreviousRouteName] = useState()

  // sets default values to empty string if it's a new item

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
    id,
    title,
    price,
    stock,
    shortDescription,
    bulletPoints,
    newBulletPoint,
    newCategoryName,
    selectedCategory,
    editImagesPage,
    imageUrl,
    carouselImages,
    selectedCategoryId,
  } = itemSpecifications;

  // useEffect(() => {
  //   setItemSpecifications({
  //     ...itemSpecifications,
  //     selectedCategory: selectInputDefaultValue,
  //   });
  //
  // }, [selectInputDefaultValue]);
  ////////////////////////////////////////////////

  //   handle the submit event

  const handleSubmit = (e) => {
    e.preventDefault();
    // create an item to add to firebase depending if it's a new item or a new category
    if (newCategory) {
      const capitalizedTitle = capitalizeString(newCategoryName);
      const item = {
        title: capitalizedTitle,
        dbTitle: newCategoryName.toLocaleLowerCase(),
      };
      createNewItemCategory(item);
    } else {
      const capitalizedTitle = capitalizeString(title);
      const item = {
        id: id,
        title: capitalizedTitle,
        cartQuantity: 0,
        price: parseInt(price),
        bulletPoints,
        routeName: encodeURI(title?.toLowerCase()),
        carouselImages,
        collection: selectedCategory,
        collectionId: selectedCategoryId,
        imageUrl,
        linkUrl: `${encodeURI(selectedCategory)}/${id}`,
        shortDescription,
        stock: parseInt(stock),
      };
      if (newItem) {
        createNewItem(item);
      } else {
        console.log(item);
        updateFirestoreItem(item);
      }
    }

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

  const handleSelectClickValue = (id, title) => {
    setItemSpecifications({
      ...itemSpecifications,
      selectedCategory: title,
      selectedCategoryId: id,
    });
  };

  ///////////////////////////////////////////////
  //     HANDLE ADDING & DELETING IMAGES      //
  ///////////////////////////////////////////////

  // the event for adding an image is onChange => onChange on the file input
  const handleAddImageChange = async (name, file) => {
    // creates a new storage image to add image in firebase storage (to get the preview)
    const imageUrlLinkStorage = await createNewStorageImagePath({
      file,
      itemId: itemSpecifications.id,
      type: name,
    });

    

    // if the image is iniside the carousel
    if (name === "carouselImages") {
      setItemSpecifications({
        ...itemSpecifications,
        carouselImages: [
          ...carouselImages,
          { url: imageUrlLinkStorage, fileName: file.name },
        ],
      });
      console.log("carousel", carouselImages);
      // it must be the main image otherwise
    } else {
      setItemSpecifications({
        ...itemSpecifications,
        [name]: { url: imageUrlLinkStorage, fileName: file.name },
      });
    }
  };




  // handle delete an image from []. The event is on click on the delete button
  const handleImageDeleteChange = (name, image, imageIdx ) => {
    const newImagesArray = carouselImages.filter((_, idx) => idx !== imageIdx);
    if (name === "carouselImages") {
      setItemSpecifications({
        ...itemSpecifications,
        carouselImages: newImagesArray,
      });
    } else {
      setItemSpecifications({
        ...itemSpecifications,
        [name]: { fileName: "", url: "" },
      });
    }
    deleteStorageImagePath({
      fileName: image.fileName,
      itemId: itemSpecifications.id,
      type: name,
    });
  };

  //image, itemId, type

  ///////////////////////////////////////////////
  // handle adding and deleting bullet points

  const handleClickAddBullet = () => {
    setItemSpecifications({
      ...itemSpecifications,
      bulletPoints: [...bulletPoints, newBulletPoint],
      newBulletPoint: "",
    });
  };

  const handleClickDeleteBullet = (e) => {
    const buttonValue = e.target.value;
    const newButtonArray = bulletPoints.filter((bullet) => {
      return bullet !== buttonValue;
    });

    setItemSpecifications({
      ...itemSpecifications,
      bulletPoints: newButtonArray,
    });
  };

  ////////////////////////////////////////////////
  // handle click to change between edit images and edit text

  const handleClickEditImagesPage = () => {
    setItemSpecifications({
      ...itemSpecifications,
      editImagesPage: !editImagesPage,
    });
  };

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
          {
            // if the modal is newCategory => render new category input
            newCategory ? (
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
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <div onClick={handleClickEditImagesPage}>
                    <CustomButtonMUI kind="small-grey">
                      {!editImagesPage ? "Edit Images" : "Edit Text"}
                    </CustomButtonMUI>
                  </div>
                </div>
                {
                  // if the page is not editImagePage => edit text
                  !editImagesPage ? (
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
                        handleClick={handleSelectClickValue}
                        menuValues={selectInputMenuValues}
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
                        <div style={{ marginTop: "40px" }}>
                          <div onClick={handleClickAddBullet}>
                            <CustomButtonMUI inline kind="icon-color">
                              add
                            </CustomButtonMUI>
                          </div>
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
                  ) : (
                    <>
                      <FormFileInput
                        mainImage={imageUrl}
                        label="Main image"
                        maxLength={1}
                        name="imageUrl"
                        handleAdd={handleAddImageChange}
                        handleDelete={handleImageDeleteChange}
                      />
                      <FormFileInput
                        name="carouselImages"
                        items={carouselImages}
                        label="Carousel Images"
                        handleAdd={handleAddImageChange}
                        handleDelete={handleImageDeleteChange}
                      />
                    </>
                  )
                }
              </>
            )
          }
          <ButtonSectionContainer>
            <div onClick={() => setVisibility(false, modalName)}>
              <CustomButtonMUI type="submit">
                {newItem || newCategory ? "Create" : "Confirm"}
              </CustomButtonMUI>
            </div>
          </ButtonSectionContainer>
        </InputSectionContainer>
      </form>
    </ModalComponent>
  );
};

AdminItemsModal.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    stock: PropTypes.number,
    shortDescription: PropTypes.string,
    bulletPoints: PropTypes.array,
    newItem: PropTypes.bool,
    newCategory: PropTypes.bool,
    imageUrl: PropTypes.shape({
      url:PropTypes.string
    }),
    carouselImages: PropTypes.array,
  }),
  modalName: PropTypes.string,
  setVisibility: PropTypes.func,
  newCategory: PropTypes.bool,
  newItem: PropTypes.bool,
  selectInputMenuValues: PropTypes.array,
  selectInputDefaultValue: PropTypes.string,
  categoryId: PropTypes.string,
};

export default AdminItemsModal;

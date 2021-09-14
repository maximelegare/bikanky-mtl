// form file input. it's used to add and delete images in [admin-items-modal.component.jsx]

import React, { useRef } from "react";
import { PropTypes } from "prop-types";
import { InputLabel } from "../form-inputs/form-input.styles";
import { ProductImgContainer } from "../_styling-containers/img-styling-container/img-styling-containers.styles";
import {
  InputFileFlexContainer,
  InputItemContainer,
  DeleteButtonAbsoluteContainer,
  DeleteButtonRelativeContainer,
} from "./form-file-input.styles";
import { InputContainer } from "../form-inputs/form-input.styles";

import defaultImage from "../../assets/default_image.svg";
import CustomButtonMUI from "../buttons/material-ui/custom-button-mui.component";

const FormFileInput = ({
  label,
  maxLength,
  items,
  handleAdd,
  name,
  handleDelete,
  mainImage,
}) => {
  console.log("items", items);
  // file input
  const fileInputRef = useRef(null);

  // when the button is clicked, it virtually clicks on the file button (this way I can have the styling I want)
  const handleClick = (type, image, imageIdx) => {
    if (type === "add") {
      fileInputRef.current.click();
    } else {
      handleDelete(name,  image, imageIdx,);
    }
  };

  // handle change on file input
  const handleChange = (e) => {
    const { name } = e.target;
    const file = e.currentTarget.files[0];
    handleAdd(name, file);
  };

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <input
        type="file"
        name={name}
        ref={fileInputRef}
        hidden
        onChange={handleChange}
      />
      <InputFileFlexContainer>
        {
          // if there is the item props => render this turnary operator
          items ? (
            // if the lenght of the array is 0, render the default image
            !items.length  ? (
              <ProductImgContainer type="admin-small" image={defaultImage} />
            ) : (
              // otherwise render one image for each
              items
                .filter((image, idx) => (maxLength ? idx < maxLength : image))
                .map((image, idx) => {
                  console.log(image.url);
                  return (
                    <InputItemContainer key={idx}>
                      <DeleteButtonRelativeContainer
                        onClick={() => handleClick("delete", image, idx)}
                      >
                        <DeleteButtonAbsoluteContainer>
                          <CustomButtonMUI kind="icon" deleteIcon>
                            delete
                          </CustomButtonMUI>
                        </DeleteButtonAbsoluteContainer>
                      </DeleteButtonRelativeContainer>
                      <ProductImgContainer
                        type="admin-small"
                        image={image.url}
                      ></ProductImgContainer>
                    </InputItemContainer>
                  );
                })
            )
          ) : // if there is no items props => it's the main image. If there is no url, render the default image
          !mainImage.url ? (
            <ProductImgContainer type="admin-small" image={defaultImage} />
          ) : (
            // otherwise render the image
            <InputItemContainer>
              <DeleteButtonRelativeContainer
                onClick={() =>
                  handleClick("delete", mainImage)
                }
              >
                <DeleteButtonAbsoluteContainer>
                  <CustomButtonMUI kind="icon" deleteIcon>
                    delete
                  </CustomButtonMUI>
                </DeleteButtonAbsoluteContainer>
              </DeleteButtonRelativeContainer>
              <ProductImgContainer type="admin-small" image={mainImage.url} />
            </InputItemContainer>
          )
        }
        <InputItemContainer>
          {
            // if there is no image
            mainImage?.url ? null : (
              <div onClick={() => handleClick("add")}>
                <CustomButtonMUI kind="icon-color">add</CustomButtonMUI>
              </div>
            )
          }
        </InputItemContainer>
      </InputFileFlexContainer>
    </InputContainer>
  );
};

FormFileInput.propTypes = {
  label: PropTypes.string, // Label for the input
  maxLength: PropTypes.number, // Maximum length of the array (used to prevent having multiple images in main image [])
  items: PropTypes.array, // All of the images stored in an []
  name: PropTypes.string, // Name of the input, with forms
  handleDelete: PropTypes.func, // handle the action of deleting an image
  handleAdd: PropTypes.func, // handle the action of adding an image
  mainImage: PropTypes.object,
};

export default FormFileInput;

// items?.length === 0 || !mainImage?.url ? null : mainImage ? (

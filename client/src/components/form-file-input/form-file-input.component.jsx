import React, { useRef } from "react";
import { PropTypes } from "prop-types";
import { InputLabel } from "../form-inputs/form-input.styles";
import { ProductImgContainer } from "../_styling-containers/img-styling-container/img-styling-containers.styles";
import {
  InputFileFlexContainer,
  InputItemContainer,
} from "./form-file-input.styles";
import { InputContainer } from "../form-inputs/form-input.styles";

import defaultImage from "../../assets/default_image.svg";
import CustomButtonMUI from "../buttons/material-ui/custom-button-mui.component";

const FormFileInput = ({ label, maxLength, items, handleChange, name }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
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
        {items <= 1 ? (
          <ProductImgContainer type="admin-small" image={defaultImage} />
        ) : (
          items
            .filter((item, idx) => (maxLength ? idx < maxLength : item))
            .map((item, idx) => (
              <InputItemContainer key={idx}>
                <ProductImgContainer type="admin-small" image={item} />
              </InputItemContainer>
            ))
        )}
        <InputItemContainer>
          {/* maxLength && items.length === maxLength  */}

          <div onClick={handleClick}>
            <CustomButtonMUI kind="icon-color">add</CustomButtonMUI>
          </div>
        </InputItemContainer>
      </InputFileFlexContainer>
    </InputContainer>
  );
};

FormFileInput.propTypes = {
  label: PropTypes.string,
  maxLength: PropTypes.number,
  items: PropTypes.array,
  handleChange: PropTypes.func,
  name: PropTypes.string,
};

export default FormFileInput;

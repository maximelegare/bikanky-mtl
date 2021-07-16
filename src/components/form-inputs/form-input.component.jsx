import React from "react";
import { TextField } from "@material-ui/core";
import { PropTypes } from "prop-types";

import { InputLabel, InputContainer } from "./form-input.styles";
import "./text-field.styles.scss";
import { ErrorContainer } from "./form-input.styles";
const FormInput = ({ handleChange, type, label, error, message, placeHolder }) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <TextField
        label={placeHolder? placeHolder : null}
        variant="outlined"
        type={type}
        className="text-field"
        onChange={(e) => handleChange(e)}
        size="small"
        style={{width:'350px'}}
        fullWidth   
      />
      {error ? (
        <ErrorContainer>{error}</ErrorContainer>
      ) : message ? (
        <h5>{message}</h5>
      ) : null}
    </InputContainer>
  );
};

FormInput.propTypes = {
  handleChange: PropTypes.func,
  type: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  message: PropTypes.string,
  placeHolder: PropTypes.string
};

export default FormInput;

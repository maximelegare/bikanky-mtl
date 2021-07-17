import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { PropTypes } from "prop-types";

import { InputLabel, InputContainer } from "./form-input.styles";
import "./text-field.styles.scss";
import { ErrorContainer, MessageContainer } from "./form-input.styles";

const useStyles = makeStyles({
  root: {
    "& label.Mui-focused": {
      color: "var(--yellow-accent)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "var(--yellow-accent)",
      boxShadow: `var(--yellow-accent-pale) 0 0 1px 2px`
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "var(--yellow-accent)",
        boxShadow: `var(--yellow-accent-pale) 0 0 1px 2px`,
      },
    },
  },
});

const FormInput = ({
  handleChange,
  type,
  label,
  error,
  message,
  placeHolder,
}) => {
  const classes = useStyles();
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <TextField
        // error
        label={placeHolder ? placeHolder : null}
        variant="outlined"
        type={type}
        className="text-field"
        onChange={(e) => handleChange(e)}
        size="small"
        fullWidth
        classes={{ root: classes.root }}
        color="secondary"
      />
      {error ? (
        <ErrorContainer>{error}</ErrorContainer>
      ) : message ? (
        <MessageContainer>{message}</MessageContainer>
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
  placeHolder: PropTypes.string,
};

export default FormInput;

import React, { useState } from "react";
import "./form-select.styles.scss";

import { PropTypes } from "prop-types";

import { withStyles } from "@material-ui/core/styles";
// import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import {
  InputLabel,
  InputContainer,
  ErrorContainer,
  MessageContainer,
} from "../form-inputs/form-input.styles";

// import { MenuItemInner } from './form-select.styles'

const CustomSelectInput = withStyles((theme, error) => ({
  input: {
    border: "solid",
    // borderColor:"#c0c0c0",
    borderColor: "transparent",
    borderWidth: "1px",
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    fontSize: 14,
    padding: "10px 26px 10px 12px",
    "&:hover": {
      borderColor: "black",
    },
    "&:focus": {
      borderRadius: 4,
      borderWidth: "2px",
      borderColor: "var(--yellow-accent)",
      boxShadow: "var(--yellow-accent-pale) 0 0 1px 2px",
    },
  },
}))(InputBase);

const FormSelect = ({
  label,
  handleClick,
  menuValues,
  error,
  message,
  removeError,
  name,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState("");

  const handleChangeLocally = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <FormControl style={{ width: "100%" }}>
        <Select
          value={value}
          onBlur={() => removeError(name)}
          onChange={(e) => handleChangeLocally(e)}
          input={
            <CustomSelectInput
              error={!!error}
              style={{
                border: `1px solid ${error ? "red" : "#c0c0c0"}`,
                borderRadius: "6px",
              }}
            />
          }
        >
          {menuValues?.map(({ title, id }) => {
            console.log(title);
            return (
              <div
                key={title}
                value={value}
                onClick={() => handleClick(id, title.toLowerCase())}
              >
                {title}
              </div>
              // <MenuItem
              //   key={title}
              //   value={id}
              //   onClick={() => handleClick(id, title.toLowerCase())}
              //   style={{zIndex:"100000"}}
              // >
              //   {title}
              // </MenuItem>
            );
          })}
        </Select>
        {error ? (
          <ErrorContainer>{error}</ErrorContainer>
        ) : message ? (
          <MessageContainer>{message}</MessageContainer>
        ) : null}
      </FormControl>
    </InputContainer>
  );
};

FormSelect.propTypes = {
  label: PropTypes.string,
  handleClick: PropTypes.func,
  name: PropTypes.string,
  menuValues: PropTypes.array,
  defaultValue: PropTypes.string,
  error: PropTypes.string,
  message: PropTypes.string,
  removeError: PropTypes.func,
};

export default FormSelect;

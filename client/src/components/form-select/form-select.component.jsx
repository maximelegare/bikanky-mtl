import React, { useState } from "react";
import { PropTypes } from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import { InputLabel, InputContainer } from "../form-inputs/form-input.styles";

// import { MenuItemInner } from './form-select.styles'

const CustomSelectInput = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #c0c0c0",
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

const FormSelect = ({ label, handleClick, menuValues }) => {
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
          
          onChange={(e) => handleChangeLocally(e)}
          input={<CustomSelectInput />}
        >
          {menuValues?.map(({ title, id }) => (
            <MenuItem
              key={title}
              value={id}
              onClick={() => handleClick(id, title.toLowerCase())}
            >
              {title}
            </MenuItem>
          ))}
        </Select>
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
};

export default FormSelect;

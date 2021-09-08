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

const FormSelect = ({ label, handleChange, menuValues }) => {
  // eslint-disable-next-line no-unused-vars
  const [valueAndName, setMenuValue] = useState({ name: "", value: "" });

  const handleClickLocally = (e, title) => {

    console.log(e, title)
    const {value} = e.target
    console.log(value)
    setMenuValue({value:value });
    // console.log(valueAndName);
    handleChange(e);
  };
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <FormControl style={{ width: "100%" }}>
        <Select
          value={valueAndName.value}
          name={valueAndName.name}
          onChange={(e) => handleClickLocally(e)}
          input={<CustomSelectInput />}
        >
          {menuValues?.map(({ title, id }) => (
            // eslint-disable-next-line no-undef
            <MenuItem key={title} value={id} name={title} 
            onClick={(e) => handleClickLocally(e, title)}
            >
              {title}
              {/* <MenuItemInner  onClick={() => console.log(title)}>{title}</MenuItemInner> */}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </InputContainer>
  );
};

FormSelect.propTypes = {
  label: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  menuValues: PropTypes.array,
  defaultValue: PropTypes.string,
};

export default FormSelect;

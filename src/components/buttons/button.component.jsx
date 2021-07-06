/* eslint-disable react/prop-types */
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import React from "react";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#efcb1d",
    width: "200px",
    "&:hover": {
      backgroundColor: "#f7d321",
    },
  },
});

const CustomButton = ({ children }) => {
  const classes = useStyles();

  return (
    <Button
      classes={{ root: classes.root }}
      variant="contained"
      color="primary"
    >
      {children}
    </Button>
  );
};

export default CustomButton;

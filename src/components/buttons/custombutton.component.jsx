
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { PropTypes } from 'prop-types'


import React from "react";

const useStyles = makeStyles({
  root: {
    backgroundColor: "var(--yellow-accent)",
    fontSize:15,
    fontWeight:600,
    fontFamily:'Open Sans',
    "&:hover": {
      backgroundColor: "#f7d321",
    },
  },
  iconClass:{
    color:'black',
    "&:hover": {
      backgroundColor: "#f7d3215a",
    },
  }
});

const CustomButton = ({ children, icon }) => {
  const classes = useStyles();

  return (
    icon ?
    (<IconButton classes={{root: classes.iconClass}} variant="contained">{children}</IconButton>)
    :
    (<Button
      classes={{ root: classes.root }}
      variant="contained"
      
    >
      {children}
    </Button>)
  );
};

CustomButton.propTypes = {
  children: PropTypes.any,
  icon: PropTypes.bool
}


export default CustomButton;

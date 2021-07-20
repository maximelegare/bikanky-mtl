import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

import React from "react";

const useStyles = makeStyles({
  root: {
    backgroundColor: "var(--yellow-accent)",
    fontSize: 15,
    fontWeight: 400,
    fontFamily: "Open Sans",
    "&:hover": {
      backgroundColor: "#f7d321",
    },
  },
  iconClass: {
    color: "black",

    "&:hover": {
      backgroundColor: "#f7d3215a",
    },
  },
  deleteIconClass: {
    color: "rgb(172, 16, 16)",
    "&:hover": {
      backgroundColor: "rgba(172, 16, 16, 0.158)",
    },
  },
});

const CustomButtonMUI = ({ children, kind, deleteIcon, routeName, type }) => {
  const classes = useStyles();

  switch (kind) {
    case "icon":
      return (
        <IconButton
          classes={{
            root: `${
              deleteIcon ? classes.deleteIconClass : classes.iconClass
            } `,
          }}
          variant="contained"
          type={type}
        >
          <span className="material-icons">{children}</span>
        </IconButton>
      );
    case "link":
      return (
        <Link to={routeName}>
          <Button
            classes={{ root: classes.root }}
            variant="contained"
            type={type}
          >
            {children}
          </Button>
        </Link>
      );  
    case "signInWithGoogle":
      return (
        <Button variant="contained" type={type} color="primary">
          {children}
        </Button>
      );
    default:
      return (
        <Button
          classes={{ root: classes.root }}
          variant="contained"
          type={type}
        >
          {children}
        </Button>
      );
  }
};

CustomButtonMUI.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  kind: PropTypes.string,
  deleteIcon: PropTypes.bool,
  routeName: PropTypes.string,
  name: PropTypes.string,
};

export default CustomButtonMUI;

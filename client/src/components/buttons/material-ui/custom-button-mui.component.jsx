/* eslint-disable no-unused-vars */
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
      backgroundColor: "var(--yellow-accent-hover)",
    },
  },
  iconClass: {
    color: "black",
    padding: "6px",
    "&:hover": {
      backgroundColor: "#f7d3215a",
    },
  },
  iconClassColor: {
    backgroundColor: "var(--yellow-accent)",
    color: "black",
    padding: "6px",
    boxShadow:"var(--light-box-shadow)",
    "&:hover": {
      backgroundColor: "var(--yellow-accent-hover)",
    },
  },
  deleteIconClass: {
    color: "rgb(172, 16, 16)",
    padding: "0px",
    "&:hover": {
      backgroundColor: "rgba(172, 16, 16, 0.158)",
    },
  },
});

const smallStyles = makeStyles({
  root: {
    backgroundColor: "var(--yellow-accent)",
    fontSize: 12,
    fontWeight: 400,
    fontFamily: "Open Sans",
    color: "black",
    padding: "3px, 5px",
    minWidth: "100px",
    "&:hover": {
      backgroundColor: "var(--yellow-accent-hover)",
    },
  },
});

const CustomButtonMUI = ({ children, kind, deleteIcon, routeName, type, value }) => {
  const classes = useStyles();
  const smallClasses = smallStyles();

  switch (kind) {
    case "icon":
      return (
        <IconButton
          disableRipple
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
    case "icon-color":
      return (
        <IconButton
          classes={{
            root: classes.iconClassColor,
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
      case "small-link":
      return (
        <Link to={routeName}>
          <Button
            classes={{ root: smallClasses.root }}
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
    case "small":
      return (
        <Button
          variant="contained"
          classes={{ root: smallClasses.root }}
          type={type}
          color="primary"
        >
          {children}
        </Button>
      );
    case "small-grey":
      return (
        <Button
          variant="contained"
          classes={{ root: smallClasses.root }}
          type={type}
          style={{backgroundColor:"var(--pale-bg-hover)"}}
        >
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
  value:PropTypes.any
};

export default CustomButtonMUI;

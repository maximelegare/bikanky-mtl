import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleHoverDropdownVisibility } from "../../../redux/dropdown-elements-visibility/dropdown.slice";
import { toggleClickDropdownVisibility } from "../../../redux/dropdown-elements-visibility/dropdown.slice";

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

const CustomButton = ({ children, kind, deleteIcon, routeName, name, type }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log("here");
    dispatch(
      toggleClickDropdownVisibility({ dropdownName: name, value: false })
    );
    dispatch(
      toggleHoverDropdownVisibility({ dropdownName: name, value: false })
    );
  };

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
        <Link to={routeName} onClick={() => handleClick}>
          <Button classes={{ root: classes.root }} variant="contained" type={type}>
            {children}
          </Button>
        </Link>
      );
    default:
      return (
        <Button classes={{ root: classes.root }} variant="contained" type={type}>
          {children}
        </Button>
      );
  }
};

CustomButton.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  kind: PropTypes.string,
  deleteIcon: PropTypes.bool,
  routeName: PropTypes.string,
  name: PropTypes.string,
};

export default CustomButton;

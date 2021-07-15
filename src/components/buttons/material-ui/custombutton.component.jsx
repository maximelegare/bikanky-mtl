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
    fontWeight: 600,
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

const CustomButton = ({ children, type, deleteIcon, routeName }) => {
  const classes = useStyles();

  switch (type) {
    case "icon":
      return (
        <IconButton
          classes={{
            root: `${
              deleteIcon ? classes.deleteIconClass : classes.iconClass
            } `,
          }}
          variant="contained"
        >
          <span className="material-icons">{children}</span>
        </IconButton>
      );
    case "link":
      return (
        <Link to={routeName}>
          <Button classes={{ root: classes.root }} variant="contained">
            {children}
          </Button>
        </Link>
      );
    default:
      return (
        <Button classes={{ root: classes.root }} variant="contained">
          {children}
        </Button>
      );
  }
};

CustomButton.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  deleteIcon: PropTypes.bool,
  routeName: PropTypes.string,
};

export default CustomButton;
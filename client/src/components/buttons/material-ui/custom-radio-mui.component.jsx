import Radio from "@material-ui/core/Radio";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

const styles = {
  root: {
    // color: "var(--yellow-accent)",
    '&$checked':{
      color:'var(--yellow-accent)'  
    },
    padding:'5px',
    "@media (not hover)": {
      "&:hover": {
        backgroundColor:'transparent'
      },
    },
  },
}

const CustomRadioMUI = (props) => {
    // eslint-disable-next-line react/prop-types
  return  <Radio disableRipple color="default"  value={props.value} {...props} />;
};

export default withStyles(styles)(CustomRadioMUI);

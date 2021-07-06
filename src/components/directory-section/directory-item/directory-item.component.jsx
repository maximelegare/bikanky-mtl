/* eslint-disable react/prop-types */
// Individual items inside the directory-grid on the homePage.

import { withRouter } from "react-router";
import React from "react";
import { DirectoryItemContainer } from "./directory-item.styles";

const DirectoryItem = ({ history, linkUrl, ...otherProps }) => {
  return (
    <DirectoryItemContainer
      onClick={() => history.push(linkUrl)}
      {...otherProps}
    />
  );
};

export default withRouter(DirectoryItem);

/* eslint-disable react/prop-types */
// Individual items inside the directory-grid on the homePage.

import { withRouter } from "react-router";
import React from "react";
import {
  DirectoryItemContainer,
  ImageContainer,
  TextWrapperContainer,
  TextContentContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ history, linkUrl, imageUrl, title,  ...otherProps }) => {
  return (
    <DirectoryItemContainer
      onClick={() => history.push(linkUrl)}
      {...otherProps}
    >
      <ImageContainer className="image-container" imageUrl={imageUrl}/>
      <TextWrapperContainer className="text-wrapper-content">
        <TextContentContainer>{title}</TextContentContainer>
      </TextWrapperContainer>
    </DirectoryItemContainer>
  );
};

export default withRouter(DirectoryItem);

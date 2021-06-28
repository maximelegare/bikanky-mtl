import React from "react";
import { DirectoryGridContainer } from "./directory-gird.styles";
import DirectoryItem from "../directory-item/directory-item.component";

const DirectoryList = () => {
  return (
    
      <DirectoryGridContainer>
        <DirectoryItem products></DirectoryItem>
        <DirectoryItem story></DirectoryItem>
        <DirectoryItem services url="/assets/services.jpg"></DirectoryItem>
        <DirectoryItem lookbook></DirectoryItem>
      </DirectoryGridContainer>
    
  );
};

export default DirectoryList;

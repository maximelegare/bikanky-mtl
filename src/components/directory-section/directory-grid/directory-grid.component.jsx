/* eslint-disable react/prop-types */
// grid on the HomePage to choose the category.

import React from "react";
import { DirectoryGridContainer } from "./directory-gird.styles";
import DirectoryItem from '../directory-item/directory-item.component';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSections } from '../../../redux/directory/directory.selector';



const DirectoryList = ({ sections }) => {
  return (
    <DirectoryGridContainer>
      {Object.values(sections).map(({id, ...otherProps}) => (
        <DirectoryItem key={id} {...otherProps}></DirectoryItem>
      ))}
    </DirectoryGridContainer>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(DirectoryList);

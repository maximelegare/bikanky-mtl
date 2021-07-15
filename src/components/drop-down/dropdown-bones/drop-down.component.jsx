/* eslint-disable react/prop-types */
import React from "react";
import {
  DropDownContainer,
  TriangleContainer,
  DropdownStylesContainer,
  TriangleWrapperContainer,
} from "./drop-down.styles";

const Dropdown = ({ margin, children }) => {
  // const dispatch = useDispatch();

  return (
    <DropDownContainer margin={margin}>
      <TriangleWrapperContainer>
        <TriangleContainer />
      </TriangleWrapperContainer>
      <DropdownStylesContainer>{children}</DropdownStylesContainer>
    </DropDownContainer>
  );
};

export default Dropdown;

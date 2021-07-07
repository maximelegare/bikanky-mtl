/* eslint-disable react/prop-types */
import React from "react";

import { useDispatch } from "react-redux";
import { toggleCartVisibility } from "../../redux/cart/cart.slices";
import {
  DropDownWrapperContainer,
  BackgroundContainer,
  DropDownContainer,
  TriangleContainer,
  DropdownStylesContainer,
} from "./drop-down.styles";

const Dropdown = ({ margin, children }) => {
  const dispatch = useDispatch()

  return (
    <DropDownWrapperContainer style={{ marginRight: `${margin}px` }}>
      <DropDownContainer>
        <TriangleContainer />
        <DropdownStylesContainer >
            {children}
        </DropdownStylesContainer>
      </DropDownContainer>
      <BackgroundContainer onClick={() => dispatch(toggleCartVisibility())} />
    </DropDownWrapperContainer>
  );
};

export default Dropdown;

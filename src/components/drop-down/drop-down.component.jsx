/* eslint-disable react/prop-types */
import React from "react";
import { useDispatch } from "react-redux";
import { toggleCartVisibility } from "../../redux/cart/cart.slices";
import {
  // DropDownWrapperContainer,
  BackgroundContainer,
  DropDownContainer,
  TriangleContainer,
  DropdownStylesContainer,
} from "./drop-down.styles";

const Dropdown = ({ margin, children, isActive }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ marginRight: `${margin}px`, position: "relative" }}>
      <DropDownContainer>
        <TriangleContainer />
        <DropdownStylesContainer>{children}</DropdownStylesContainer>
      </DropDownContainer>

      {isActive ? (
        <BackgroundContainer onClick={() => dispatch(toggleCartVisibility())} />
      ) : null}
    </div>
  );
};

export default Dropdown;

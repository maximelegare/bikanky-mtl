/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";
// import { useDispatch } from "react-redux";
// import { toggleCartVisibility } from "../../redux/cart/cart.slices";
import {
  // DropDownWrapperContainer,
  BackgroundContainer,
  DropDownContainer,
  TriangleContainer,
  DropdownStylesContainer,
} from "./drop-down.styles";

const Dropdown = ({ margin, children, isActive }) => {
  // const dispatch = useDispatch();
  const modalRef = useRef();

  return (
    <div>
      <CSSTransition
        in={isActive}
        timeout={200}
        classNames="cart"
        nodeRef={modalRef}
        unmountOnExit={true}
      >
        <DropDownContainer ref={modalRef} margin={margin}>
          <TriangleContainer />
          <DropdownStylesContainer>{children}</DropdownStylesContainer>
        </DropDownContainer>
      </CSSTransition>
      {isActive ? (
        <BackgroundContainer  />
      ) : null}
    </div>
  );
};

export default Dropdown;

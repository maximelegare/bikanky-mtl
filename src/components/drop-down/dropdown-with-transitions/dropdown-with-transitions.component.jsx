import React from "react";
import { useRef } from "react";
import { BackgroundContainer } from "./transitions.styles";
import { CSSTransition } from "react-transition-group";
import {
  TransitionsDropdownContainer,
  TransitionsWrapperContainer,
} from "./transitions.styles";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { toggleDropdownVisibility } from "../../../redux/dropdown-elements-visibility/dropdown.slice";

const DropdownWithTransitions = ({ dropdownEl, icon, isActive, type }) => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  return (
    <>
      <TransitionsWrapperContainer
        onMouseOver={() =>
          dispatch(toggleDropdownVisibility({ type: type, value: true }))
        }
        onMouseLeave={() =>
          dispatch(toggleDropdownVisibility({ type: type, value: false }))
        }
      >
        <div>{icon}</div>
        <CSSTransition
          in={isActive}
          timeout={200}
          classNames="element"
          nodeRef={modalRef}
          unmountOnExit={true}
        >
          <TransitionsDropdownContainer ref={modalRef}>
            {dropdownEl}
          </TransitionsDropdownContainer>
        </CSSTransition>
      </TransitionsWrapperContainer>
      {isActive ? <BackgroundContainer /> : null}
    </>
  );
};

DropdownWithTransitions.propTypes = {
  dropdownEl: PropTypes.element,
  icon: PropTypes.element,
  isActive: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default DropdownWithTransitions;

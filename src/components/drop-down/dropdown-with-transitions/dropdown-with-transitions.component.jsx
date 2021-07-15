import React from "react";
import { useRef } from "react";
import { BackgroundContainer } from "./transitions.styles";
import { CSSTransition } from "react-transition-group";
import { TransitionsDropdownContainer } from "./transitions.styles";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { toggleDropdownVisibility } from "../../../redux/dropdown-elements-visibility/dropdown.slice";

const DropdownWithTransitions = ({ dropdownEl, icon, isActive, type }) => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  return (
    <div style={{margin:'0 12px'}}>
      <div onMouseLeave={() =>
            dispatch(toggleDropdownVisibility({ type: type, value:false }))
          }>
        <div
          onMouseEnter={() =>
            dispatch(toggleDropdownVisibility({ type: type, value: true }))
          }
        >
          {icon}
        </div>
        <CSSTransition
          in={isActive}
          timeout={200}
          classNames="element"
          nodeRef={modalRef}
          unmountOnExit={true}
        >
          <TransitionsDropdownContainer className="dropdown" ref={modalRef}>
            {dropdownEl}
          </TransitionsDropdownContainer>
        </CSSTransition>
      </div>
      {isActive ? <BackgroundContainer /> : null}
    </div>
  );
};

DropdownWithTransitions.propTypes = {
  dropdownEl: PropTypes.element,
  icon: PropTypes.element,
  isActive: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
};

export default DropdownWithTransitions;

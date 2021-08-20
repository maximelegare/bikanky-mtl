import React from "react";
import { useRef } from "react";
import { BackgroundContainer } from "./transitions.styles";
import { CSSTransition } from "react-transition-group";
import { TransitionsDropdownContainer } from "./transitions.styles";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { toggleHoverDropdownVisibility } from "../../../redux/dropdown-elements-visibility/dropdown.slice";
import { toggleClickDropdownVisibility } from "../../../redux/dropdown-elements-visibility/dropdown.slice";

import { useSwipeable } from "react-swipeable";


const DropdownWithTransitions = ({ dropdownEl, icon, isActive, name, clickStatus }) => {


  const dispatch = useDispatch();
  const modalRef = useRef();
  const backgroundRef = useRef();

  const handlers = useSwipeable({
    onTap: () => dispatch(toggleClickDropdownVisibility({dropdownName: name}))
  })
  return (
    <div style={{ margin: "0 12px" }}>
      <div
        onMouseLeave={() =>
          dispatch(toggleHoverDropdownVisibility({ dropdownName: name, value: false }))
        }
      >
        <div
        {...handlers}
          onMouseEnter={() =>
            dispatch(toggleHoverDropdownVisibility({ dropdownName: name, value: true }))
          }
          onClick={() =>
            dispatch(
              toggleClickDropdownVisibility({ dropdownName: name, value:!clickStatus })
            )
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

      <CSSTransition
        in={isActive}
        timeout={200}
        classNames="background"
        nodeRef={backgroundRef}
        unmountOnExit={true}
      >
        <BackgroundContainer
          ref={backgroundRef}
          onClick={() =>
            dispatch(toggleClickDropdownVisibility({ dropdownName: name, value:false }))
          }
        />
      </CSSTransition>
    </div>
  );
};

DropdownWithTransitions.propTypes = {
  dropdownEl: PropTypes.element,
  icon: PropTypes.element,
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  clickStatus:PropTypes.bool.isRequired
};

export default DropdownWithTransitions;

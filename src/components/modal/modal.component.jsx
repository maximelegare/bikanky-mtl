import React, { useRef } from "react";
import { CSSTransition } from "react-transition-group";

import { ModalWrapperContainer, ModalBackground } from "./modal.styles";
import { PropTypes } from "prop-types";

const ModalComponent = ({ isVisible, setVisibility, children }) => {
  const modalRef = useRef();
  const backgroundRef = useRef();

  return (
    <>
      <CSSTransition
        in={isVisible}
        timeout={200}
        classNames="modal"
        nodeRef={modalRef}
        unmountOnExit={true}
      >
        <ModalWrapperContainer ref={modalRef}>{children}</ModalWrapperContainer>
      </CSSTransition>
      <CSSTransition
        in={isVisible}
        timeout={300}
        classNames="background"
        nodeRef={backgroundRef}
        unmountOnExit={true}
      >
        <ModalBackground
          ref={backgroundRef}
          onClick={() => setVisibility(false)}
        ></ModalBackground>
      </CSSTransition>
    </>
  );
};

ModalComponent.propTypes = {
  openModal: PropTypes.any,
  children: PropTypes.any,
  isVisible: PropTypes.bool,
  setVisibility: PropTypes.func,
};

export default ModalComponent;

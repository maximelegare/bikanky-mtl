import React, { useRef } from "react";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";
import { ModalAnimationContainer } from "./with-animation.styles";

const WithAnimation = (WrappedConponent) => {
  const Modal = ({ isVisible, ...otherProps }) => {
    const modalRef = useRef();

    return (
      <CSSTransition
        in={isVisible}
        timeout={200}
        classNames="modal"
        nodeRef={modalRef}
        unmountOnExit={true}
      >
        <ModalAnimationContainer ref={modalRef}>
          <WrappedConponent {...otherProps} />
        </ModalAnimationContainer>
      </CSSTransition>
    );
  };

  Modal.propTypes = {
    isVisible: PropTypes.bool,
  };

  return Modal;
};

export default WithAnimation;

import React, { useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import {
  ModalContainer,
  ModalBackgroundContainer,
  ModalWrapperContainer,
  ModalOverlayContainer,
  SeparatorContainer
} from "./modal.styles";
import { PropTypes } from "prop-types";


const ModalComponent = ({ isVisible, setVisibility, children }) => {

  const modalRef = useRef();
  const backgroundRef = useRef();
  const wrapperRef = useRef();

  // if modal is visible, body can't scroll
  useEffect(() => {
    isVisible ? document.body.classList.add("no-scroll") : null;
    return () => {
      document.body.classList.remove("no-scroll");
    };
  });

  // if the click is on the wrapperContainer => not on the modal, close the modal
  const handleClick = (e) => {
    if (e.target === wrapperRef.current) setVisibility(false);
  };

  return (
    <>
      <CSSTransition
        in={isVisible}
        timeout={200}
        classNames="modal"
        nodeRef={modalRef}
        unmountOnExit={true}
      >
        {/* this is a container with the width and height of page. if overflow (the modal is longer than the page) => it will scroll */}
        {/* onClick (ModalWrapperContainer) close the modal, if it is the actual container, not the modal */}
        <ModalWrapperContainer ref={wrapperRef} onClick={handleClick}>

          {/* this is positioning the modal in the center of the page */}
          <ModalOverlayContainer>
          {/* this is the actual modal */}
            <ModalContainer ref={modalRef}>{children}</ModalContainer>
            {/* this is a separator under the modal so that it's not completly on the bottom of the page */}
            <SeparatorContainer/>
          </ModalOverlayContainer>
        </ModalWrapperContainer>
      </CSSTransition>
      <CSSTransition
        in={isVisible}
        timeout={300}
        classNames="background"
        nodeRef={backgroundRef}
        unmountOnExit={true}
      >
        {/* this is the bakcground color */}
        <ModalBackgroundContainer
          ref={backgroundRef}
        ></ModalBackgroundContainer>
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

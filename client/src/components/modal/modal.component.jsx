import React, { useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import {
  ModalContainer,
  ModalBackgroundContainer,
  ModalWrapperContainer,
  ModalOverlayContainer,
  SeparatorContainer,
} from "./modal.styles";
import { PropTypes } from "prop-types";

import { useDispatch } from "react-redux";
import { setModalVisibility } from "../../redux/modal-elements-visibility/modal.slice";

const ModalComponent = ({
  isVisible,
  children,
  modalName,
  withConfirmationModal,
}) => {
  const modalRef = useRef();
  const backgroundRef = useRef();
  const wrapperRef = useRef();
  const dispatch = useDispatch();

  // if modal is visible, body can't scroll
  useEffect(() => {
    if (isVisible) {
      document.body.classList.add("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  });
  console.log("with-confirmation", withConfirmationModal);

  // if the click is on the wrapperContainer => not on the modal, close the modal
  const handleClick = (e) => {
    if (e.target === wrapperRef.current) {
      // if the modal uses confirmation, open confirmation modal
      if (withConfirmationModal) {
        dispatch(
          setModalVisibility({
            modalName: "confirmationModal",
            visibility: true,
          })
        );
        // otherwise close the modal
      }else{
        dispatch(setModalVisibility({ modalName, visibility: false }));
      }
    }

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
        <ModalWrapperContainer
          ref={wrapperRef}
          onClick={handleClick}
          style={{
            zIndex: `${
              modalName === "confirmationModal" ? "10000" : "default"
            }`,
          }}
        >
          {/* this is positioning the modal in the center of the page */}
          <ModalOverlayContainer>
            {/* this is the actual modal */}
            <ModalContainer ref={modalRef}>{children}</ModalContainer>
            {/* this is a separator under the modal so that it's not completly on the bottom of the page */}
            <SeparatorContainer />
          </ModalOverlayContainer>
        </ModalWrapperContainer>
      </CSSTransition>
      <CSSTransition
        in={isVisible && modalName !== "confirmationModal"}
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
  modalName: PropTypes.string,
  noBackgroundClosing: PropTypes.bool, // user can't click on background to close the modal
  withConfirmationModal: PropTypes.bool,
};

export default ModalComponent;

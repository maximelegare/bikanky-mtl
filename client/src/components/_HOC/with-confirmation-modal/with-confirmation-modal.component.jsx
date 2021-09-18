import React from "react";
import { PropTypes } from "prop-types";
import ConfirmationModal from "../../modal/confirmation-modal/confirmation-modal.component";
import { useSelector } from "react-redux";
import { selectconfirmationModalVisibility } from "../../../redux/modal-elements-visibility/modal.selector";

const WithConfirmationModal = (WrappedConponent) => {
  const Modal = ({ modalName, ...otherProps }) => {
    const confirmationModalVisibility = useSelector(
      selectconfirmationModalVisibility
    );
    return (
      <>
        <ConfirmationModal
          isVisible={confirmationModalVisibility}
          modalName="confirmationModal"
          modalToConfirm={modalName}
          message="Are you sure you want to quit? All data will be lost!"
        />
        <WrappedConponent
          {...otherProps}
          modalName={modalName}
          withConfirmationModal
        />
      </>
    );
  };
  Modal.propTypes = {
    modalName: PropTypes.string,
  };

  return Modal;
};

export default WithConfirmationModal;

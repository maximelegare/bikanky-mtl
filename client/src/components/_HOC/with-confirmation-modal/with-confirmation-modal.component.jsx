import React from "react";
import { PropTypes } from "prop-types";
import ConfirmationModal from "../../modal/confirmation-modal/confirmation-modal.component";
import { useSelector } from "react-redux";
import { selectconfirmationModalVisibility } from "../../../redux/modal-elements-visibility/modal.selector";

const WithConfirmationModal = ({ modalName, modalComponent, modalMessage }) => {
  const confirmationModalVisibility = useSelector(
    selectconfirmationModalVisibility
  );
  return (
    <>
      <ConfirmationModal
        isVisible={confirmationModalVisibility}
        modalName="confirmationModal"
        modalToConfirm={modalName}
        message={modalMessage}
      />
      {modalComponent}
    </>
  );
};
WithConfirmationModal.propTypes = {
  modalName: PropTypes.string,
  modalComponent:PropTypes.element,
  modalMessage:PropTypes.string
};

export default WithConfirmationModal;

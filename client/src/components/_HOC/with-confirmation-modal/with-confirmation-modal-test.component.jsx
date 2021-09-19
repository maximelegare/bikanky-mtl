import React from "react";
// import { PropTypes } from "prop-types";
import ConfirmationModal from "../../modal/confirmation-modal/confirmation-modal.component";
import { useSelector } from "react-redux";
import { selectconfirmationModalVisibility } from "../../../redux/modal-elements-visibility/modal.selector";

const WithConfirmationModalTest = (WrappedComponent) => {
  const NewModal = ({ ...otherProps }) => {
    const confirmationModalVisibility = useSelector(
      selectconfirmationModalVisibility
    );
    return (
      <>
        <ConfirmationModal
          isVisible={confirmationModalVisibility}
          modalName="confirmationModal"
          //   modalToConfirm={modalName}
          message="Are you sure you want to qui?"
        />
        <WrappedComponent withConfirmationModal {...otherProps} />
      </>
    );
  };
  return NewModal;
};

export default WithConfirmationModalTest;

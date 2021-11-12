// HOC used to add a confirmation to close or to stay on a modal

import React from "react";
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
          message="Are you sure you want to qui?"
        />
        <WrappedComponent withConfirmationModal  {...otherProps} />
      </>
    );
  };
  return NewModal;
};

export default WithConfirmationModalTest;

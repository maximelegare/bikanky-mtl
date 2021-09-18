// modal that pops up to make sure if the user really wants to cancel

import React from "react";
import { PropTypes } from "prop-types";

import ModalComponent from "../modal.component";
import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";

import { setModalVisibility } from "../../../redux/modal-elements-visibility/modal.slice";
import { useDispatch } from "react-redux";

import {
  ConfimationModalWrapperContainer,
  ConfimationModalMarginsContainer,
  ButtonsFlexContainer,
  MessageContainer,
} from "./confirmation-modal.styles";

const ConfirmationModal = ({
  setVisibility,
  modalName,
  message,
  modalToConfirm,
  ...otherProps
}) => {
  const dispatch = useDispatch();
  const handleClick = (status) => {
    if(status){
        dispatch(setModalVisibility({ modalName:modalToConfirm, visibility: false }));
        dispatch(setModalVisibility({ modalName, visibility: false }));
    }else{
        dispatch(setModalVisibility({ modalName, visibility: false }));
    }  
  };

  return (
    <ModalComponent
      {...otherProps}
      modalName={modalName}
    >
      <ConfimationModalWrapperContainer>
        <ConfimationModalMarginsContainer>
          <MessageContainer>{message}</MessageContainer>
          <ButtonsFlexContainer>
            <div onClick={() => handleClick(true)}>
              <CustomButtonMUI kind="small">Proceed</CustomButtonMUI>
            </div>
            <div onClick={() => handleClick(false)}>
              <CustomButtonMUI value={false} kind="small">
                Cancel
              </CustomButtonMUI>
            </div>
          </ButtonsFlexContainer>
        </ConfimationModalMarginsContainer>
      </ConfimationModalWrapperContainer>
    </ModalComponent>
  );
};

ConfirmationModal.propTypes = {
  setVisibility: PropTypes.func,
  modalName: PropTypes.string,
  message: PropTypes.string,
  modalToConfirm:PropTypes.string
};

export default ConfirmationModal;

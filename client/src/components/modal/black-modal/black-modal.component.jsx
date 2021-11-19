/* eslint-disable no-unused-vars */
import React from "react";
import ModalComponent from "../modal.component";
import { PropTypes } from "prop-types";
import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";

import { setModalVisibility } from "../../../redux/modal-elements-visibility/modal.slice";
import { useDispatch } from "react-redux";
import WithAnimation from "../../_HOC/with-animation/with-animation.component";
import { BulletPointsSectionContainer } from "../../items/item-specifications/item-description-section/item-description-section.styles";
import {
  BlackModalWrapperContainer,
  TextWrapperContainer,
  CustomButtonContainer,
  TextContainer,
} from "./black-modal.styles";
import { TitleModalContainer } from "../address-modal/address-modal.styles";

const BlackModal = ({ userAddress, modalName, ...otherProps }) => {
  const dispatch = useDispatch();
  const bulletPoints = ["Flavoie.styliste@gmail.com", "(514) 647-4622"] 

  ////////////////////////////////////////////////

  //   handle the submit event

  return (
    <ModalComponent {...otherProps} modalName={modalName}>
      <BlackModalWrapperContainer>
        <TextWrapperContainer>
          <TextContainer>
            Comme il est impossible pour le moment d&apos;effectuer des
            transactions via notre site web, vous pouvez vous procurer mes
            créations chez{" "}
            <span style={{ fontWeight: 600, color: "black" }}>
              <a
                href="https://8lackofficial.com/"
                rel="noreferrer"
                target="_blank"
                style={{ fontSize: "15px", textDecoration: "underline" }}
              >
                8lack Clothing
              </a>
            </span>
            .
          </TextContainer>
          <TextContainer>
            <h4 style={{fontSize:"17px"}}>Pour me contacter :</h4>
            <BulletPointsSectionContainer>
              <ul>
                {bulletPoints.map((bullet, index) => (
                  <li key={index}>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </BulletPointsSectionContainer>
          </TextContainer>
        </TextWrapperContainer>
        <CustomButtonContainer>
          <div
            onClick={() =>
              dispatch(setModalVisibility({ modalName, visibility: false }))
            }
          >
            <CustomButtonMUI kind="small">Close</CustomButtonMUI>
          </div>
        </CustomButtonContainer>
      </BlackModalWrapperContainer>
    </ModalComponent>
  );
};

BlackModal.propTypes = {
  userAddress: PropTypes.shape({
    country: PropTypes.string,
    fullName: PropTypes.string,
    addressLine: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postalCode: PropTypes.string,
    phoneNumber: PropTypes.string,
  }),
  closeModal: PropTypes.func,
  modalName: PropTypes.string,
};

export default WithAnimation(BlackModal);

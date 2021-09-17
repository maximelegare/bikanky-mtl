import React from "react";
import { PropTypes } from "prop-types";
import { AddressContainer } from "./checkout-address.styles";
import AddressModal from "../../../modal/address-modal/address-modal.component";
import CustomButtonMUI from "../../../buttons/material-ui/custom-button-mui.component";

import CustomButton from "../../../buttons/my-buttons/customButtons/custom-button.component";

import { TitleContainer } from "../checkout-infos.styles";
import { RightSectionContainer } from "./checkout-address.styles";
import { useSelector, useDispatch } from "react-redux";
import { selectAddressModalVisibility } from "../../../../redux/modal-elements-visibility/modal.selector";
import { setModalVisibility } from "../../../../redux/modal-elements-visibility/modal.slice";

const CheckoutAddressSection = ({ user }) => {
  const userAddress = user?.address;

  const addressModalVisibility = useSelector(selectAddressModalVisibility);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setModalVisibility({ modalName: "addressModal", visibility: true }));
  };

  return (
    <>
      <RightSectionContainer>
        <TitleContainer>1 - Shipping Address</TitleContainer>
        <AddressModal
          isVisible={addressModalVisibility}
          userAddress={userAddress}
          modalName="addressModal"
        />

        <AddressContainer>
          {/* render the address section */}
          {userAddress ? (
            <div>
              <h5>{userAddress.fullName}</h5>
              <h5>{userAddress.addressLine}</h5>
              <h5>
                {userAddress.city}, {userAddress.state}&nbsp;&nbsp;
                {userAddress.postalCode}
              </h5>
            </div>
          ) : (
            // or render a button to add an address
            <div onClick={handleClick}>
              <CustomButtonMUI kind="small">Add an Address</CustomButtonMUI>
            </div>
          )}
        </AddressContainer>
      </RightSectionContainer>
      {userAddress && (
        <div onClick={handleClick}>
          <CustomButton
            kind="text"
            title="Edit Address"
            color="var(--dark-font-color)"
          />
        </div>
      )}
    </>
  );
};

CheckoutAddressSection.propTypes = {
  user: PropTypes.shape({
    address: PropTypes.shape({
      AddressLine: PropTypes.string,
      city: PropTypes.string,
      country: PropTypes.string,
      fullName: PropTypes.string,
      phoneNumber: PropTypes.string,
      postalCode: PropTypes.string,
      state: PropTypes.string,
    }),
  }),
  handleClick: PropTypes.func,
};

export default CheckoutAddressSection;

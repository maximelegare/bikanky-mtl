import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { AddressContainer } from "./checkout-address.styles";
import AddressModal from "../../../modal/address-modal/address-modal.component";
import CustomButtonMUI from "../../../buttons/material-ui/custom-button-mui.component";

import CustomButton from "../../../buttons/my-buttons/customButtons/custom-button.component";

import { TitleContainer } from "../checkout-infos.styles";
import { RightSectionContainer } from "./checkout-address.styles";

const CheckoutAddressSection = ({ user }) => {
  const userAddress = user?.address;

  const [modalVisibility, setModalVisibility] = useState(false);

  const setVisibility = (visibility) => {
    setModalVisibility(visibility);
  };


  return (
    <>
      <RightSectionContainer>
        <TitleContainer>1 - Shipping Address</TitleContainer>
        <AddressModal
          setVisibility={setVisibility}
          isVisible={modalVisibility}
          userAddress={userAddress}
          closeModal={setVisibility}
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
            <div onClick={() => setVisibility(true)}>
              <CustomButtonMUI kind="small">Add an Address</CustomButtonMUI>
            </div>
          )}
        </AddressContainer>
      </RightSectionContainer>
      {userAddress && (
        <div onClick={() => setVisibility(true)}>
          <CustomButton kind="text" title="Edit Address" color="var(--dark-font-color)" />
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

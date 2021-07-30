import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { AddressContainer } from "./checkout-address.styles";
import AddressModal from "../../../modal/address-modal/address-modal.component";
import CustomButtonMUI from "../../../buttons/material-ui/custom-button-mui.component";

const CheckoutAddressSection = ({ user }) => {
  const userAddress = user?.data?.address;

  const [modalVisibility, setModalVisibility] = useState(false);

  const setVisibility = (visibility) => {
    setModalVisibility(visibility);
  };

  return (
    <>
      <AddressModal
        setVisibility={setVisibility}
        isVisible={modalVisibility}
        userAddress={userAddress}
      />

      <AddressContainer>
        {userAddress ? (
          <div>
            <h5>
              {userAddress.lName} {userAddress.fName}
            </h5>
            <h5>{userAddress.address}</h5>
            <h5>{userAddress.city}</h5>
          </div>
        ) : (
          <div onClick={() => setVisibility(true)}>
            <CustomButtonMUI kind="small">Add an Address</CustomButtonMUI>
          </div>
        )}
      </AddressContainer>
    </>
  );
};

CheckoutAddressSection.propTypes = {
  user: PropTypes.shape({
    data: PropTypes.shape({
      address: PropTypes.shape({
        lName: PropTypes.string,
        fName: PropTypes.string,
        address: PropTypes.string,
        city: PropTypes.string,
      }),
    }),
  }),
};

export default CheckoutAddressSection;

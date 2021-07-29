import React from "react";
import { PropTypes } from "prop-types";
import { AddressContainer } from "./checkout-address.styles";

import CustomButtonMUI from "../../../buttons/material-ui/custom-button-mui.component";

const CheckoutAddressSection = ({ user }) => {
  const userAddress = user?.data?.address

  return (
    <AddressContainer>
      {userAddress ? (
        <div>
          <h5>
            {userAddress.lName} {userAddress.fName}
          </h5>
          <h5>{userAddress.address}</h5>
          <h5>{userAddress.city}</h5>
        </div>
      ) : <CustomButtonMUI kind="small">Add an Address</CustomButtonMUI>}
    </AddressContainer>
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

import React from "react";
import WithSpinner from "../../../_HOC/with-spinner/with-spinner.component";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../redux/user/user.selector";
import { selectFetchUserloading } from "../../../../redux/user/user.selector";
import CheckoutAddressSection from "./checkout-address-section.component";

const CheckoutAddressWithSpinner = WithSpinner(CheckoutAddressSection);

const CheckoutAddress = () => {
  const user = useSelector(selectCurrentUser || undefined);
  const isLoading = useSelector(selectFetchUserloading);


  return (
    <>
      <CheckoutAddressWithSpinner
        small
        isLoading={isLoading}
        user={user}
      />
    </>
  );
};

export default CheckoutAddress;

import React from "react";
import WithSpinner from "../../../_HOC/with-spinner/with-spinner.component";

import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../../redux/user/user.selector";
import { selectFetchUserloading } from "../../../../redux/user/user.selector";
import CheckoutAddressSection from "./checkout-address-section.component";

import {
  RightSectionContainer,
  ButtonContainer,
} from "./checkout-address.styles";
import { TitleContainer } from "../checkout-infos.styles";

const CheckoutAddressWithSpinner = WithSpinner(CheckoutAddressSection);

const CheckoutAddress = () => {
  const user = useSelector(selectCurrentUser || undefined);
  const isLoading = useSelector(selectFetchUserloading);
  return (
    <>
      <RightSectionContainer>
        <TitleContainer>1 - Shipping Address</TitleContainer>
        <CheckoutAddressWithSpinner small isLoading={isLoading} user={user} />
      </RightSectionContainer>
      <ButtonContainer>Edit Adress</ButtonContainer>
    </>
  );
};

export default CheckoutAddress;

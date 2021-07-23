import React from "react";
import TopImageSection from "../../components/top-image-section/top-image-section.component";
import CheckoutSection from "../../components/checkout/checkout.component";
import { PageMediumMarginsContainer } from "../../components/_styling-containers/pages-styling-containers/pages-styling-containers.styles";

const CheckoutPage = () => {
  return (
    <>
      <TopImageSection type="without-title" />
      <PageMediumMarginsContainer>
        <CheckoutSection />
      </PageMediumMarginsContainer>
    </>
  );
};

export default CheckoutPage;

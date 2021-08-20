import React from "react";
import TopImageSection from "../../components/top-image-section/top-image-section.component";
import CheckoutSection from "../../components/checkout/checkout.component";
import { PageLargeMediaMarginsContainer, PageWrapperContainer } from "../../components/_styling-containers/pages-styling-containers/pages-styling-containers.styles";

const CheckoutPage = () => {
  return (
    <PageWrapperContainer>
      <TopImageSection type="without-title" />
      <PageLargeMediaMarginsContainer>
        <CheckoutSection />
      </PageLargeMediaMarginsContainer>
    </PageWrapperContainer>
  );
};

export default CheckoutPage;

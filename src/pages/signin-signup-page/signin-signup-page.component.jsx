import React from "react";
import TopImageSection from "../../components/top-image-section/top-image-section.component";
import { PageWrapperContainer } from '../../components/_styling-containers/pages-styling-containers/pages-styling-containers.styles'
import SigninSignup from "../../components/signin-signup/signin-signup.component";

const SigninSignupPage = () => {
  return (
    <PageWrapperContainer>
      <TopImageSection type="without-title" />
      <SigninSignup />
    </PageWrapperContainer>
  );
};

export default SigninSignupPage;

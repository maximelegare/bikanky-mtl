import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";
import { PropTypes } from "prop-types";

const WithSpinner = (WrappedConponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </SpinnerContainer>
      </SpinnerOverlay>
    ) : (
      <WrappedConponent {...otherProps} />
    );
  };

  Spinner.propTypes = {
    isLoading: PropTypes.bool,
  };

  return Spinner;
};

export default WithSpinner;

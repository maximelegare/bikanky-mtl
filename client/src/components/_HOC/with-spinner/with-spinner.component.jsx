import React from "react";
import {
  SpinnerContainer,
  SpinnerOverlay,
  SmallSpinnerContainer,
} from "./with-spinner.styles";
import { PropTypes } from "prop-types";

const WithSpinner = (WrappedConponent) => {
  const Spinner = ({ isLoading, small, ...otherProps }) => {
    return isLoading ? (
      <>
        {small ? (
          <SmallSpinnerContainer>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </SmallSpinnerContainer>
        ) : (
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
        )}
      </>
    ) : (
      <WrappedConponent {...otherProps} />
    );
  };

  Spinner.propTypes = {
    isLoading: PropTypes.bool,
    small: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
  };

  return Spinner;
};

export default WithSpinner;

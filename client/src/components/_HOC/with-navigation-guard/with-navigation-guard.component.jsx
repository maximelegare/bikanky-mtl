// HOC that takes a path and a reidirect url. If the user is not admin, it will redirect the user.


import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router";
import {
  selectFetchUserloading
} from "../../../redux/user/user.selector";


import { useSelector } from "react-redux";

import {
  SpinnerContainer,
  SpinnerOverlay,
} from "../with-spinner/with-spinner.styles";

const WithNavigationGuard = (WrappedConponent) => {
  const NavigationGuard = ({path, redirectUrl, condition, ...otherProps}) => {

    const isLoading = useSelector(selectFetchUserloading)

    return (
      <>
        {isLoading ? (
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
          <Route
          path={path}
          render={() =>
            condition ? (
              <WrappedConponent {...otherProps} />
            ) : (
              <Redirect to={redirectUrl} />
            )
          }
        /> 
        )}
      </>
    );
  };





  
  NavigationGuard.propTypes = {
    path: PropTypes.string,
    redirectUrl: PropTypes.string,
    isLoading: PropTypes.bool,
    condition:PropTypes.bool
  };
  return NavigationGuard;
};

WithNavigationGuard.propTypes = {
  wrappedConponent: PropTypes.element,
};

export default WithNavigationGuard;

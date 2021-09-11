import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router";
import {
  selectIsAdmin,
  selectCurrentUser,
} from "../../../redux/user/user.selector";
import { useSelector } from "react-redux";

import {
  SpinnerContainer,
  SpinnerOverlay,
} from "../with-spinner/with-spinner.styles";

const WithNavigationGuard = (WrappedConponent) => {
  const NavigationGuard = ({path, redirectUrl}) => {
    const isAdmin = useSelector(selectIsAdmin);
    const currentUser = useSelector(selectCurrentUser);
    return (
      <>
        {currentUser ? (
          <Route
            path={`/${path}`}
            render={(props) =>
              isAdmin ? (
                <WrappedConponent {...props} />
              ) : (
                <Redirect to={`/${redirectUrl}`} />
              )
            }
          />
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
    );
  };

  NavigationGuard.propTypes = {
    path: PropTypes.string,
    redirectUrl: PropTypes.string,
    isLoading: PropTypes.bool,
  };
  return NavigationGuard;
};

WithNavigationGuard.propTypes = {
  wrappedConponent: PropTypes.element,
};

export default WithNavigationGuard;

import React from "react";

import {
  SideBarLinkContainer,
  AdminButtonContainer,
} from "./admin-button.styles";
import { withRouter } from "react-router";
import { PropTypes } from "prop-types";

const AdminButton = ({ title, match, navLink, routeName }) => {

  return (
    <>
      {navLink ? (
        <div>
          <SideBarLinkContainer to={`${match.path}/${routeName}`}>
            {title}
          </SideBarLinkContainer>
        </div>
      ) : (
        <div >
          <AdminButtonContainer value={title.toLowerCase()}>{title}</AdminButtonContainer>
        </div>
      )}
    </>
  );
};

AdminButton.propTypes = {
  title: PropTypes.string,
  match: PropTypes.object,
  navLink: PropTypes.bool,
  routeName: PropTypes.string,
};

export default withRouter(AdminButton);

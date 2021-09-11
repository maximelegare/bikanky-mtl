import React from "react";
import { PropTypes } from 'prop-types'
import { PageFlexSection } from "../_styling-containers/pages-styling-containers/pages-styling-containers.styles";
import SideBarAdmin from "./side-bar-admin/side-bar-admin.component";
import { Route, Switch, withRouter } from "react-router";
// import AdminSection from '../admin-section/admin-section.component'

import UsersPageAdmin from "./admin-pages/users/users-page-admin.component";

import { SideBarMarginContainer } from "./side-bar-admin/side-bar-admin.styles";

import CategoriesPageAdmin from "./admin-pages/categories/categories-page-admin.component";

const Admin = ({ match }) => {
  return (
    <>
      <SideBarAdmin
        titles={["Categories", "Users","Services", "Shipping", "Orders"]}
      />
      <PageFlexSection>
        <SideBarMarginContainer/>
        <Switch>
          <Route
            path={`${match.path}/categories`}
            component={CategoriesPageAdmin}
          />
          
          <Route path={`${match.path}/users`} component={UsersPageAdmin}/>
          <Route path={`${match.path}/services`} />
          <Route path={`${match.path}/shipping`} />
          <Route path={`${match.path}/orders`} />
        </Switch>
      </PageFlexSection>
    </>
  );
};

Admin.propTypes = {
  match:PropTypes.object
}

export default withRouter(Admin);

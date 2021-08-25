import React from "react";

import { PageFlexSection } from "../_styling-containers/pages-styling-containers/pages-styling-containers.styles";
import SideBarAdmin from "./side-bar-admin/side-bar-admin.component";
import { Route, Switch, withRouter } from "react-router";
// import AdminSection from '../admin-section/admin-section.component'

import { SideBarMarginContainer } from "./side-bar-admin/side-bar-admin.styles";

import CategoriesPageAdmin from "./admin-pages/categories/categories-page-admin.component";

const Admin = ({ match }) => {
  return (
    <>
      <SideBarAdmin
        titles={["Categories", "Services", "Users", "Shipping", "Orders"]}
      />
      <PageFlexSection>
        <SideBarMarginContainer/>
        <Switch>
          <Route
            path={`${match.path}/categories`}
            component={CategoriesPageAdmin}
          />
          <Route path={`${match.path}/services`} />
          <Route path={`${match.path}/users`} />
          <Route path={`${match.path}/shipping`} />
          <Route path={`${match.path}/orders`} />
        </Switch>
      </PageFlexSection>
    </>
  );
};

export default withRouter(Admin);

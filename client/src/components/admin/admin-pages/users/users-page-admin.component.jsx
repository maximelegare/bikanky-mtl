// Admin page where the users can be managed
// this section is rendered inside [admin.component.jsx]

import React from "react";
import { PageMediumMarginsContainer } from "../../../_styling-containers/pages-styling-containers/pages-styling-containers.styles";
import AdminCard from "../../admin-card/admin-card.component";
import CreateAdminUsers from "./create-admin-users/create-admin-users.component";

const UsersPageAdmin = () => {
  return (
    <PageMediumMarginsContainer>
      <AdminCard noList>
        <CreateAdminUsers />
      </AdminCard>
    </PageMediumMarginsContainer>
  );
};

export default UsersPageAdmin;

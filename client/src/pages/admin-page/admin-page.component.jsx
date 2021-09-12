import React from "react";
import {
  PageWrapperContainer,

  // PageMediumMarginsContainer,
} from "../../components/_styling-containers/pages-styling-containers/pages-styling-containers.styles";
import TopImageSection from "../../components/top-image-section/top-image-section.component";

import Admin from "../../components/admin/admin.component";

// eslint-disable-next-line react/prop-types
const AdminPage = () => {
  return (
    <PageWrapperContainer>
      <TopImageSection type="without-title" />
      <Admin />
    </PageWrapperContainer>
  );
};

export default AdminPage;

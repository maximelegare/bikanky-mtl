import React from "react";
import {
  PageWrapperContainer,
  PageMediumMarginsContainer,
} from "../../components/_styling-containers/pages-styling-containers/pages-styling-containers.styles";
import TopImageSection from "../../components/top-image-section/top-image-section.component";


import AdminSection from "../../components/admin-section/admin-section.component";

const AdminPage = () => {
  return (
    <PageWrapperContainer>
      <TopImageSection type="without-title" />
      <PageMediumMarginsContainer>
        <AdminSection/>
      </PageMediumMarginsContainer>
    </PageWrapperContainer>
  );
};


export default AdminPage;

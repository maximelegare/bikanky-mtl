/* eslint-disable react/prop-types */
import React from "react";
import DirectoryGrid from "../../components/directory-section/directory-grid/directory-grid.component";
import AboutSection from "../../components/about-section/about-section.component";
import TopImageSection from "../../components/top-image-section/top-image-section.component";
import { MainSectionContainer } from "./home-page.styles";
import { PageWrapperContainer } from "../../components/_styling-containers/pages-styling-containers/pages-styling-containers.styles";


const HomePage = () => {
  return (
    <div>
      <PageWrapperContainer >
        <TopImageSection type="home-page" />
        <MainSectionContainer>
          <DirectoryGrid />
        </MainSectionContainer>
      </PageWrapperContainer>
      <AboutSection></AboutSection>
    </div>
  );
};

export default HomePage;

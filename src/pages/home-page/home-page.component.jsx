/* eslint-disable react/prop-types */
import React from "react";
import DirectoryGrid from "../../components/directory-section/directory-grid/directory-grid.component";
import AboutSection from "../../components/about-section/about-section.component";
import TopImageSection from "../../components/top-image-section/top-image-section.component";
import { MainSectionContainer, LandingSectionWrapperContainer } from "./home-page.styles";

const HomePage = () => {
  return (
    <div>
      <LandingSectionWrapperContainer>
        <TopImageSection type="home-page" />
        <MainSectionContainer>
          <DirectoryGrid />
        </MainSectionContainer>
      </LandingSectionWrapperContainer>
      <AboutSection></AboutSection>
    </div>
  );
};

export default HomePage;

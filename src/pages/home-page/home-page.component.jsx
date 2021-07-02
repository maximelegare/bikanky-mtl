/* eslint-disable react/prop-types */
import React from "react";
import DirectoryGrid from "../../components/directory-gird/directory-grid.component";
import AboutSection from "../../components/about-section/about-section.component";
import TopImageSection from "../../components/top-image-section/top-image-section.component";
import { MainSectionContainer } from "./home-page.styles";


const HomePage = () => {
  return (
    <div>
      <TopImageSection homePage />
      <MainSectionContainer>
        <DirectoryGrid />
      </MainSectionContainer>
      <AboutSection></AboutSection>
    </div>
  );
};


export default HomePage;

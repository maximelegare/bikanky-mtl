import React from "react";
import DirectoryList from "../../components/directory-list/directory-list.component";
import AboutSection from "../../components/about-section/about-section.component";


import {
  HomePageContainer,
  ImageContainer,
  TopSectionContainer,
} from "./homePage.styles";

const HomePage = () => {
  return (
    <div>
      <HomePageContainer>
        <TopSectionContainer>
          <ImageContainer />
          <DirectoryList />
        </TopSectionContainer>
        <AboutSection></AboutSection>
      </HomePageContainer>
    </div>
  );
};

export default HomePage;

/* eslint-disable react/prop-types */
import React from "react";
// import DirectoryGrid from "../../components/directory-section/directory-grid/directory-grid.component";
// import AboutSection from "../../components/about-section/about-section.component";
import TopImageSection from "../../components/top-image-section/top-image-section.component";
import { MainSectionContainer } from "./home-page.styles";
import { PageWrapperContainer } from "../../components/_styling-containers/pages-styling-containers/pages-styling-containers.styles";
// import { useSelector } from "react-redux";
// import { selectSliderVisibility } from "../../redux/side-slider/side-slider.selectors";

import DirectoryMainImage from "../../components/directory-section/directory-main-image/directory-main-image.component";


const HomePage = () => {
  // const sliderVisibility = useSelector(selectSliderVisibility)
  return (
    <>
      <PageWrapperContainer >
        <TopImageSection type="home-page" />
        <MainSectionContainer>
          {/* <DirectoryGrid /> */}
          <DirectoryMainImage/>
        </MainSectionContainer>
      </PageWrapperContainer>
      {/* <AboutSection></AboutSection> */}
    </>
  );
};

export default HomePage;

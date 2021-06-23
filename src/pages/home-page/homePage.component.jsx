import React from "react";
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
        </TopSectionContainer>
      </HomePageContainer>
    </div>
  );
};

export default HomePage;

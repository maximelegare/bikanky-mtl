import React from "react";
import { AboutSectionContainer, QuoteContainer } from "./about-section.styles";
import { CircleContainer } from "../form/color-forms.styles";

const AboutSection = () => {
  return (
    <AboutSectionContainer>
      <QuoteContainer>
        <div>
          <h1>« Le Style est le vêtement de la pensée »</h1>
          <CircleContainer style={{ margin:'30px auto 0 auto'}}/>
          <CircleContainer style={{ margin:'15px auto 0 auto'}}/>
          <CircleContainer style={{ margin:'15px auto 0 auto'}}/>
        </div>
      </QuoteContainer>
    </AboutSectionContainer>
  );
};

export default AboutSection;

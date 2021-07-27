import styled from "styled-components";


export const NoScrollContainer = styled.div`
color: ${props => props.sliderVisibility ? 'red' : 'none'};
`

export const MainSectionContainer = styled.div`
  height: 62vh;
  @media only screen and (max-width: 900px) {
    height: unset;
  }
`;

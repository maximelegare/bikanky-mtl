// margins of the pages (layout)


import styled from "styled-components";

export const PageWrapperContainer = styled.div`
  background-color: var(--div-bg-color);
  min-height: 100vh;
  /* background-color: red; */
`;

export const PageMediumMarginsContainer = styled.div`
  width: 75%;
  margin: 40px auto 0;
  @media screen and (max-width: 1300px) {
    width: 90%;
  }
`;

export const PageLargeMediaMarginsContainer = styled.div`
  width: 60%;
  margin: 40px auto 0;
  @media screen and (max-width: 1300px) {
    width: 90%;
  }
`;


export const PageLargeMarginsContainer = styled.div`
margin: 0 auto;
width:40%;
`;

export const PageFlexSection = styled.div`
display: flex;
`

// list items grid
export const ItemsListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 15px;
  grid-row-gap: 50px;
  justify-content: space-evenly;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`;
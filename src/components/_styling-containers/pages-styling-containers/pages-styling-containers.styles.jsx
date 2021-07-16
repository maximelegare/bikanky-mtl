import styled from "styled-components";

export const PageWrapperContainer = styled.div`
  background-color: var(--div-bg-color);
`;

export const PageMediumMarginsContainer = styled.div`
  width: 75%;
  margin: 40px auto 0;
  @media screen and (max-width: 1300px) {
    width: 90%;
  }
`;

export const PageLargeMarginsContainer = styled.div`
margin: 0 auto;
width:40%
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
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;
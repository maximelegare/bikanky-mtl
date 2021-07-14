import styled from "styled-components";

export const ItemsPreviewContainer = styled.div`
  width: 75%;
  margin: 40px auto 0;
  @media screen and (max-width: 1300px) {
    width: 90%;
  }
`;

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

export const TitleWrapperContainer = styled.div`
  hr{
    margin-bottom: 15px;
    height: 2px; 
  }

`

export const TitleContainer = styled.h2`
  margin-bottom: 10px;
  cursor: pointer;
  width: 0;
  height: 100%;
  transition: 300ms ease-in-out;
  sup{
    font-size: 1rem; 
    margin-left: 8px;
  }
  :hover{
    color:var(--dark-font-hover);
    transform: scale(1.05);
  }
  /* width: 50%; */
`;

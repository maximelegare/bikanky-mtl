import styled from "styled-components";

export const ItemsPreviewContainer = styled.div`
  width: 85%;
  margin: 40px auto 0;
   
`;

export const ItemsListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 15px;
  justify-content: space-evenly;

  @media screen and (max-width:900px){
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width:500px){
    grid-template-columns: 1fr;
  }
`;

export const TitleContainer = styled.h1`
  margin-bottom: 20px;
  width: 50%;
`;

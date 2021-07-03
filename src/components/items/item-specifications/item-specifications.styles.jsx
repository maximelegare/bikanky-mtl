import styled from "styled-components";

export const ItemSpecificationTopContainer = styled.div`
  width: 75%;
  height: 77vh;
  margin: 0 auto ;
  
  display: flex;
  
  @media screen and (max-width:1100px){
    width: 95%;
  } 
  @media screen and (max-width:900px){
    width:80%
  }
`;

export const ItemContentContainer = styled.div`
width: 100%;
height: 85%;
margin-top: 40px;
display: flex;

`

export const ItemImagesContainer = styled.div`
flex:2;
width: 65%;
height: 100%;
background-color: yellow;

`
export const ItemDescriptionContainer = styled.div`
flex:1;
/* width: 10%; */
height: 100%;
background-color: blue;
border-radius: 0 8px 8px 0 ;
`
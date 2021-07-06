import styled from "styled-components";

export const ItemSpecificationTopContainer = styled.div`
  width: 70%;
  height: 84vh;
  margin: 0 auto ;
  display: flex;
  
  @media screen and (max-width:1100px){
    width: 95%;
  } 
`;

export const ItemContentContainer = styled.div`
width: 100%;
height: 90%;
margin-top: 30px;
display: flex;

`
export const ItemWrapperContainer = styled.div`
  flex: 1;
  width: 20%;
  height: 100%;
  background-color: white;
  border-radius: 8px 8px 8px 8px;
  box-shadow: 0 5px 10px #1b1b1b55;
`;


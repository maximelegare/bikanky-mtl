import styled from "styled-components";





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

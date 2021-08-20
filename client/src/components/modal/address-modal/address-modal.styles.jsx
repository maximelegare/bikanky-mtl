import styled from 'styled-components'

export const InputSectionContainer = styled.div`
  padding: 15px 10px 25px 10px;
  width: 400px;
  @media screen and (max-width:500px){
    width: 95vw;
  }
`;

export const TitleModalContainer = styled.div`
height: 60px;
display: flex;
align-items: center;
background-color: var(--yellow-accent);
box-shadow: var(--light-box-shadow);
 h3{
     margin:0 10px;
     width: 100%;
 }
`

export const ButtonSectionContainer = styled.div`
  display: flex;
  justify-content: center;
`;
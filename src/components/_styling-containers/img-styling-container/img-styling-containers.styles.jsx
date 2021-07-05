import styled from 'styled-components'

export const ProductImgContainer = styled.div`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;


  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  background-image: ${(props) => `url(${props.image})`};
  height: 75%;
  width: 100%;
  cursor: pointer;
  

  /* @media screen and (max-width: 1800px) {
    height: 30vh;
  }
  @media screen and (max-width: 1400px) {
    height: 25vh;
  }
  @media screen and (max-width: 1100px) {
    height: 20vh;
  } */
`;
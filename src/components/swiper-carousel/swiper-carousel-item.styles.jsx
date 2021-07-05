

import styled from "styled-components";

export const SwiperImageContainer = styled.div`
  background-image: ${props => `url(${props.image})`};
  
  /* width: 95%; */
  height:50vh;
  background-repeat:no-repeat ;
  background-size: cover;
`;

import styled, { css } from "styled-components";

const getCardHeight = (props) => {
  
  if (props.large) {
    return largeStyle;
  } else if (props.medium) {
    return mediumStyle;
  } else if (props.small) {
    return smallStyle;
  }
};

export const DirectoryItemContainer = styled.div`
  background-color: #363636;
  margin: 0 20px;
  background-image:  ${props => (`url(${props.url})`)};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  background-position-x: 100%;
  width: 10rem;
  transition: 100ms ease-in-out;
  /* height: 70%; */

  /* flex: 1 1 10em; */
  height: 70%;
  ${getCardHeight}

  &:hover{
    transform: scale(1.05);
  }
`;

const largeStyle = css`
  height: 80%;
`;
const mediumStyle = css`
  height: 70%;
`;
const smallStyle = css`
  height: 60%;
`;

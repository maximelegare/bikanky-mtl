import styled, { css } from "styled-components";

const getCardHeight = (props) => {
  
  switch (props.name) {
    case 'hats':
      return productsStyles
    case 'jackets':
      return storyStyles
    case 'sneakers':
      return servicesStyles
    case 'womens':
      return lookbookStyles
  }
};

export const DirectoryItemContainer = styled.div`
  background-color: #363636;
  background-image:  ${props => (`url(${props.imageUrl})`)};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  background-position-x: 100%;
  border-radius: 4px;
  box-shadow: 0 2px 4px #8b8b8b;
  cursor: pointer;
  ${getCardHeight}

  &:hover{
    transform: scale(1.05);
  }
`;

const productsStyles = css`
  grid-area: products;
  background-color: red;
`;
const storyStyles = css`
  grid-area: story;
  background-color: blue;
`;
const servicesStyles = css`
  grid-area: services;
  background-color: yellow;
`;
const lookbookStyles = css`
  grid-area: lookbook;
  background-color: green;
`;

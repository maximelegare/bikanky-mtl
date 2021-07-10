import styled, { css } from "styled-components";

const getGridAreaName = (props) => {
  switch (props.routeName) {
    case "hats":
      return productsStyles;
    case "jackets":
      return storyStyles;
    case "sneakers":
      return servicesStyles;
    case "womens":
      return lookbookStyles;
  }
};
export const DirectoryItemContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px #8b8b8b;
  cursor: pointer;
  position: relative;
  ${getGridAreaName}

  .text-wrapper-content {
    opacity: 0;
  }

  &:hover {
    .text-wrapper-content {
      transition: 0.1s ease-in-out;
      opacity: 1;
    }
    .image-container {
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      transform: scale(1.1);
    }
  }
`;

export const TextWrapperContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #18181892;
`;

export const TextContentContainer = styled.h1`
  color: var(--yellow-accent);
  text-align: center;
  padding: 5px 8px;
  border-radius: 5px;
  border: 2px solid var(--yellow-accent)
`;

export const ImageContainer = styled.div`
  transition: transform 0.5s ease-out;
  background-image: ${(props) => `url(${props.imageUrl})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  background-position-x: 50%;
  width: 100%;
  height: 100%;
`;

const productsStyles = css`
  grid-area: products;
  /* background-color: red; */
`;
const storyStyles = css`
  grid-area: story;
  /* background-color: blue; */
`;
const servicesStyles = css`
  grid-area: services;
  /* background-color: yellow; */
`;
const lookbookStyles = css`
  grid-area: lookbook;
  /* background-color: green; */
`;

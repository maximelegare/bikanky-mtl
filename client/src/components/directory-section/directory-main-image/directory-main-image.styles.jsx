import styled from "styled-components";

export const DirectoryMainImageWrapperContainer = styled.div`
  width: 60%;
  height: 40vh;
  margin: 30px auto 0;
  overflow: hidden;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px #8b8b8b;
  cursor: pointer;
  position: relative;

  .text-wrapper-content {
    opacity: 0;
  }

  &:hover {
    .text-wrapper-content {
      transition: 0.3s ease-in-out;
      opacity: 1;
    }
    .image-container {
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      transform: scale(1.1);
    }
  }
  /* display: grid; */
  /* grid-template-columns: repeat(4, 1fr); */
  /* grid-template-rows:  1fr 1fr; */
  /* gap: 15px; */
`;

export const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  background-size: cover;
  background-position: bottom;
  transition: transform 0.5s ease-out;
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

export const TextContentContainer = styled.h2`
  color: var(--yellow-accent);
  text-align: center;
  padding: 5px 8px;
  border-radius: 5px;
  border: 2px solid var(--yellow-accent);
`;

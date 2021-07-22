import styled from "styled-components";

export const ButtonWrapperContainer = styled.button`
  margin-top: 10px;
  border: none;
  width: 100%;
  /* outline: none; */
  background-color: ${(props) =>
    props.accent
      ? "var(--yellow-accent)"
      : "var(--mobile-slider-text-color)"};
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  box-shadow: var(--light-box-shadow);
  transition: 300ms ease-in-out;
  :hover {
    background-color: ${(props) =>
      props.accent ? "var(--yellow-accent-hover)" : "var(--pale-bg-hover)"};
  }
`;

export const TextContainer = styled.h4``;

export const IconContainer = styled.span``;

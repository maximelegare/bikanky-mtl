import styled from "styled-components";
import { Link } from "react-router-dom";


export const ButtonWrapperContainer = styled.button`
  margin-top: 10px;
  border: none;
  width: 100%;
  /* outline: none; */
  background-color: ${(props) =>
    props.color ? props.color : "var(--mobile-slider-text-color)"};
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  box-shadow: var(--light-box-shadow);
  transition: 300ms ease-in-out;
  :hover {
    background-color: ${(props) =>
      props.color ? "var(--yellow-accent-hover)" : "var(--pale-bg-hover)"};
  }
`;

export const TextLinkContainer = styled(Link)`
color:var(--dark-font-color);
text-decoration: underline;
`


export const TextContainer = styled.h4``;

export const IconContainer = styled.span``;

export const TextButtonContainer = styled.button`
  background-color: transparent;
  border: none;
  color: var(--yellow-accent);
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1rem;
  color: ${(props) =>
    props.color ? props.color : "var(--mobile-slider-text-color)"};
`;


export const IconOnlyButtonContainer = styled.button`
background-color: transparent;
border:none;
cursor: pointer;
span{
  color:var(--red-accent);
}
`;
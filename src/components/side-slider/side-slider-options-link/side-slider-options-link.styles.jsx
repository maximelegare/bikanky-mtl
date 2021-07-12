import styled from 'styled-components'
import { NavLink } from 'react-router-dom';

export const OptionsLinkSlider = styled(NavLink)`
  padding: 10px;
  display: block;
  color: #dfdfdf;
  font-size: 1rem;
  
  transition: 200ms ease-in-out;   
  border-top: 1px solid var(--mobile-line);
  :hover {
    color: var(--yellow-accent);
    background-color: var(--mobile-hover);
  }

  &.active {
    color: var(--yellow-accent);
  }
`;
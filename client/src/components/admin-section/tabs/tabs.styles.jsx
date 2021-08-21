import styled from 'styled-components'
import { NavLink } from 'react-router-dom';



export const TabsWrapperContainer = styled.div`
margin-top: 10px;
width: 90%;
`

export const TabContainer = styled(NavLink)`
    display: block;
  margin-bottom: 10px;
  background-color: #d8d8d86f;
  border-radius: 4px;
  width: 100%;
  padding: 10px 0;
  text-align: center;
  border:none;
  cursor: pointer;
  box-shadow: var(--light-box-shadow);
  &.active{
      background-color:#b1b1b170;
  }
`;
import styled from "styled-components";
import { NavLink } from "react-router-dom";




export const SideBarLinkContainer = styled(NavLink)`
  display: block;
  margin: 0 auto;
  margin-bottom: 10px;
  /* background-color: #d8d8d86f; */
  border-radius: 4px;
  width: 90%;
  padding: 10px 0;
  text-align: center;
  border:none;
  cursor: pointer;
  color:var(--mobile-slider-text-color);
  :nth-child(1){
    margin-top: 20px;
}
  &.active{
      background-color:var(--yellow-accent);
      color:black;
      box-shadow:var(--light-box-shadow);
  }
`;

export const AdminButtonContainer = styled.button`
  display: block;
  margin:0 auto 10px auto;
  background-color: #d8d8d86f;
  border-radius: 4px;
  width: 90%;
  padding: 10px 0;
  text-align: center;
  border:none;
  cursor: pointer;
  box-shadow: var(--light-box-shadow);
  &.active{
    background-color:#9b9b9b6f;
  }

  
`

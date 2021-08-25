import React from "react";

import AdminButton from "../admin-button/admin-button.component";
import { SideBarWrapperContainer } from "./side-bar-admin.styles";

import {PropTypes} from 'prop-types'

const SideBarAdmin = ({ titles }) => {
  return (
    <SideBarWrapperContainer>
      {titles.map((title) => (
        <AdminButton key={title} title={title} navLink routeName={title.toLowerCase()}/>
      ))}
    </SideBarWrapperContainer>
  );
};

SideBarAdmin.propTypes = {
  titles:PropTypes.array.isRequired
}



export default SideBarAdmin;

import React from "react";

import CustomButton from "../../../buttons/my-buttons/customButtons/custom-button.component";
import { auth } from "../../../../firebase/firebase.utils";
import {
  ContentContainer,
  IsSignInWrapperContainer,
  UserInfos,
} from "./is-sign-in-dropdown.styles";
import { PropTypes } from "prop-types";

const IsSignInUserDropdown = ({ currentUser }) => {
  return (
    <IsSignInWrapperContainer>
      <ContentContainer>
        <UserInfos>
          <h5>Logged in as:</h5>
          <h4>{currentUser.email}</h4>
        </UserInfos>
        <hr style={{ marginTop: "10px" }} />
        <div onClick={() => auth.signOut()}>
          <CustomButton icon="logout" title="Logout" />
        </div>
      </ContentContainer>
    </IsSignInWrapperContainer>
  );
};

IsSignInUserDropdown.propTypes = {
  currentUser: PropTypes.object,
};
export default IsSignInUserDropdown;

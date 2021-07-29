import React from "react";
import { useDispatch } from "react-redux";
import { toggleClickDropdownVisibility } from "../../../../redux/dropdown-elements-visibility/dropdown.slice";
import { toggleHoverDropdownVisibility } from "../../../../redux/dropdown-elements-visibility/dropdown.slice";

import CustomButton from "../../../buttons/my-buttons/customButtons/custom-button.component";
import { auth } from "../../../../firebase/firebase.utils";
import {
  ContentContainer,
  IsSignInWrapperContainer,
  UserInfos,
} from "./is-sign-in-dropdown.styles";
import { PropTypes } from "prop-types";

const IsSignInUserDropdown = ({
  currentUser: {
    data: { email },
  },
}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    auth.signOut();

    dispatch(
      toggleClickDropdownVisibility({ dropdownName: "signIn", value: false })
    );
    dispatch(
      toggleHoverDropdownVisibility({ dropdownName: "signIn", value: false })
    );
  };

  return (
    <IsSignInWrapperContainer>
      <ContentContainer>
        <UserInfos>
          <h5>Logged in as:</h5>
          <h5 style={{fontWeight:600}}>{email}</h5>
        </UserInfos>
        <hr style={{ marginTop: "8px" }} />
        <div onClick={() => handleClick()}>
          <CustomButton icon="settings" title="Settings" />
        </div>
        <div onClick={() => handleClick()}>
          <CustomButton icon="logout" title="Logout" color="var(--yellow-accent)"/>
        </div>
      </ContentContainer>
    </IsSignInWrapperContainer>
  );
};

IsSignInUserDropdown.propTypes = {
  currentUser: PropTypes.shape({
    data: PropTypes.shape({
      email: PropTypes.string,
    }),
  }),
};
export default IsSignInUserDropdown;

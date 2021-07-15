import React from "react";
import { UserIconContainer } from "./userIcon.styles";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import { toggleDropdownVisibility } from "../../../redux/dropdown-elements-visibility/dropdown.slice";

// import { selectSignInVisibility } from "../../../redux/dropdown-elements-visibility/dropdown.selector";

const UserIconButton = ({ children }) => {
  // const signInVisibility = useSelector(selectSignInVisibility);
  const dispatch = useDispatch();

  return (
    <UserIconContainer
      onMouseOver={() =>
        dispatch(
          toggleDropdownVisibility({
            type: "signInVisibility",
            value: true,
          })
        )
      }
      onMouseOut={() =>
        dispatch(
          toggleDropdownVisibility({
            type: "signInVisibility",
            value: false,
          })
        )
      }
      className="material-icons"
    >
      {children}
    </UserIconContainer>
  );
};

UserIconButton.propTypes = {
  children: PropTypes.string,
};

export default UserIconButton;

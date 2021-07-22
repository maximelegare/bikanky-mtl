import React from "react";

import { InfosWrapperContainer } from "./logged-in-infos.styles";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../../redux/user/user.selector";

const LoggedInSliderInfos = () => {
  const currentUser = useSelector(selectCurrentUser);

  return (
    <>
      {currentUser ? (
        <InfosWrapperContainer>
          <h4>logged in as:</h4>
          <h3>{currentUser.data.email}</h3>
        </InfosWrapperContainer>
      ) : null}
    </>
  );
};

export default LoggedInSliderInfos;

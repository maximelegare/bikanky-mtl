import React from "react";
import { PropTypes } from "prop-types";
import { AdminCardContainer } from "./admin-card.styles";

import AdminButton from "../admin-button/admin-button.component";

const AdminCard = ({ titles, small, handleClick }) => {
  

//   get category from redux, send the value of the button clicked to redux to select the category
 

  

  return (
    <AdminCardContainer small={small}>
      {titles?.map((title) => {
        return (
          <div key={title} onClick={(e) => handleClick(e)}>
            <AdminButton value={title} title={title} />
          </div>
        );
      })}
    </AdminCardContainer>
  );
};

AdminCard.propTypes = {
  titles: PropTypes.array,
  small: PropTypes.bool,
  handleClick:PropTypes.func
};

export default AdminCard;

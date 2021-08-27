import React from "react";
import { PropTypes } from "prop-types";
import { AdminCardContainer } from "./admin-card.styles";

import AdminButton from "../admin-button/admin-button.component";

const AdminCard = ({ titles, small, handleClick }) => {
  
    

  return (
    <AdminCardContainer small={small}>
      {titles?.map((title) => {
        return (
          <div key={title} onClick={(e) => handleClick(e, )}>
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
  handleClick:PropTypes.func,
  item:PropTypes.object
};

export default AdminCard;

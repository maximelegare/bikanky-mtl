import React from "react";
import { PropTypes } from "prop-types";
import { AdminCardContainer } from "./admin-card.styles";


import AdminButton from "../admin-button/admin-button.component";

const AdminCard = ({ titles, small }) => {


    const handleClick = (e) => {
        console.log(e.target.value);
      };

  return (
    <AdminCardContainer small={small}>
      {titles?.map((title) => {
        return (
          <div key={title} onClick={handleClick}>
            <AdminButton title={title}/>
          </div>
        );
      })}
    </AdminCardContainer>
  );
};

AdminCard.propTypes = {
  titles: PropTypes.array,
  small: PropTypes.bool,
};

// const mapStateToProps = (state, ownProps) => {(
//     category:  
// )}

export default (AdminCard);

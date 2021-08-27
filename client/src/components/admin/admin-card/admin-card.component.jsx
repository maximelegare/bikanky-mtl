// background card of every element rendered in the the admin pages. I pass title props and it renders the buttons, otherwise it renders what is in children props.
// It's the second layer in every admin pages.

import React from "react";
import { PropTypes } from "prop-types";
import { AdminCardContainer } from "./admin-card.styles";

import AdminButton from "../admin-button/admin-button.component";

const AdminCard = ({
  items,
  small,
  handleClick,
  itemSpecification,
  children,
  currentButton,
}) => {
  return (
    <AdminCardContainer small={small}>
      {!itemSpecification ? (
        items?.map(({ routeName, title }) => {
          return (
            <div key={title} onClick={(e) => handleClick(e)}>
              <AdminButton
                routeName={routeName}
                value={title}
                title={title}
                currentButton={currentButton}
              />
            </div>
          );
        })
      ) : (
        <>{children}</>
      )}
    </AdminCardContainer>
  );
};

AdminCard.propTypes = {
  items: PropTypes.array,
  small: PropTypes.bool,
  handleClick: PropTypes.func,
  itemSpecification: PropTypes.bool,
  children: PropTypes.any,
  currentButton: PropTypes.string,
};

export default AdminCard;

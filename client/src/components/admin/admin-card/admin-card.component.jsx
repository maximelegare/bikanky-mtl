import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { AdminCardContainer } from "./admin-card.styles";

import { useSelector } from "react-redux";
import { selectCategoryItemsTest } from "../../../redux/items/items.selectors";
import AdminButton from "../admin-button/admin-button.component";

const AdminCard = ({ titles, small }) => {
  const [buttonValue, setButtonValue] = useState("sneakers");

//   get category from redux, send the value of the button clicked to redux to select the category
  const category = useSelector((state) =>
    selectCategoryItemsTest(state, buttonValue)
  );

  console.log(category)     

  const handleClick = (e) => {
    setButtonValue(e.target.value);
  };

  return (
    <AdminCardContainer small={small}>
      {titles?.map((title) => {
        return (
          <div key={title} onClick={handleClick}>
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
};

export default AdminCard;

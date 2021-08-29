// background card of every element rendered in the the admin pages. I pass title props and it renders the buttons, otherwise it renders what is in children props.
// It's the second layer in every admin pages.

// the

import React from "react";
import { PropTypes } from "prop-types";
import {
  AdminCardContainer,
  MarginTopContainer,
  ButtonContainer,
} from "./admin-card.styles";
// import AdminItemsModal from "../../modal/admin-items-modal/admin-items-modal.component";
import AdminButton from "../admin-button/admin-button.component";
import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";
const AdminCard = ({
  items,
  small,
  handleClick,
  itemSpecification,
  children,
  currentButton,
  topButton,
  modalComponent,
  setModalVisibility,
  modalName
}) => {

  
  

  return (
    <>
      {/* <AdminItemsModal
        newItem
        isVisible={modalVisibility}
        setVisibility={setModalVisibility}
      /> */}
      {modalComponent}

      <AdminCardContainer small={small}>
        {topButton && (
          <ButtonContainer onClick={() => setModalVisibility(true, modalName)}>
            <CustomButtonMUI kind="icon-color">add</CustomButtonMUI>
          </ButtonContainer>
        )}
        <MarginTopContainer>
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
        </MarginTopContainer>
      </AdminCardContainer>
    </>
  );
};

AdminCard.propTypes = {
  items: PropTypes.array,
  small: PropTypes.bool,
  handleClick: PropTypes.func,
  itemSpecification: PropTypes.bool,
  children: PropTypes.any,
  currentButton: PropTypes.string,
  topButton: PropTypes.bool,
  modalComponent: PropTypes.element,
  setModalVisibility: PropTypes.func,
  modalName:PropTypes.string
};

export default AdminCard;

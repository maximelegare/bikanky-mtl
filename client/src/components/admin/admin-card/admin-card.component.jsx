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
  noList,
  children,
  currentButton,
  topButton,
  modalComponent,
  setModalVisibility,
  modalName,
  categoryElement,
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
          {!noList && items ? (
            Object.values(items).map(({ id ,routeName, title, collectionId }) => {
              return (
                <AdminButton
                  id={id}
                  key={title}
                  routeName={routeName}
                  title={title}
                  currentButton={currentButton}
                  handleClick={handleClick}
                  collectionId={collectionId}
                  categoryElement={categoryElement}
                  name={modalName}
                />
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
  items: PropTypes.object,
  small: PropTypes.bool,
  handleClick: PropTypes.func,
  noList: PropTypes.bool,
  children: PropTypes.any,
  currentButton: PropTypes.string,
  topButton: PropTypes.bool,
  modalComponent: PropTypes.element,
  setModalVisibility: PropTypes.func,
  modalName: PropTypes.string,
  categoryElement:PropTypes.bool,
  itemsCard:PropTypes.bool
};

export default AdminCard;

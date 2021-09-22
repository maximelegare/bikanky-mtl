// this button is used inside admin-card. it renders every categories/items. it also renders the buttons in the admin side-bar

import React from "react";
import {
  SideBarLinkContainer,
  AdminButtonContainer,
  ButtonFlexContainer,
} from "./admin-button.styles";
import { withRouter } from "react-router";
import { PropTypes } from "prop-types";

import { deleteFirestoreCategory } from "../../../firebase/firebase.utils";
import { deleteFirestoreItem } from "../../../firebase/firebase.utils";

import CustomButtonMUI from "../../buttons/material-ui/custom-button-mui.component";


const AdminButton = ({
  imageUrl,
  carouselImages,
  item,
  id,
  title,
  match,
  navLink,
  routeName,
  currentButton,
  handleClick,
  categoryElement,
  collectionId,
  name
}) => {

  console.log("admin-button-item", )
  console.log("carouselImages", carouselImages)
  const handleDeleteClick = (e) => {
    // it prevent the default action when a user clicks on the parent(it doesn't select a category when user click on delete button)
    e.preventDefault();
    e.stopPropagation();

    // the categoryElement bool determines if the admin card is for newCategories or new items because it's not the same firebase utils used to delete one vs the other
    if(categoryElement){
      console.log('category')
      deleteFirestoreCategory(id)
    }else{
      console.log('item')
      deleteFirestoreItem(collectionId , id, [...carouselImages, imageUrl])
    }
  }

  return (
    <>
      {
      
      navLink ? (
        <div>
          <SideBarLinkContainer to={`${match.path}/${routeName}`}>
            {title}
          </SideBarLinkContainer>
        </div>
      ) : (
        <AdminButtonContainer

          className={id === currentButton ? "active" : null}
          onClick={() => handleClick(routeName, id, name)}
        >
          <ButtonFlexContainer>
            <div>{title}</div>
            <div onClick={handleDeleteClick}>
              <CustomButtonMUI deleteIcon kind="icon">
                delete
              </CustomButtonMUI>
            </div>
          </ButtonFlexContainer>
        </AdminButtonContainer>
      )}
    </>
  );
};

AdminButton.propTypes = {
  item:PropTypes.object,
  carouselImages:PropTypes.array,
  imageUrl:PropTypes.object,
  id:PropTypes.string,
  title: PropTypes.string,
  match: PropTypes.object,
  navLink: PropTypes.bool,
  collectionId:PropTypes.string,
  routeName: PropTypes.string,
  category: PropTypes.string,
  sendData: PropTypes.func,
  selected: PropTypes.bool,
  currentButton: PropTypes.string,
  handleClick: PropTypes.func,
  categoryElement:PropTypes.bool,
  name:PropTypes.string,
  images:PropTypes.array
};

export default withRouter(AdminButton);

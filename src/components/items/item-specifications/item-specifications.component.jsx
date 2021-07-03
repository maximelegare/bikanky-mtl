/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectItem } from "../../../redux/items/items.selectors";
import {
  ItemSpecificationTopContainer,
  ItemImagesContainer,
  ItemContentContainer,
  ItemDescriptionContainer
} from "./item-specifications.styles";

import TopImageSection from "../../top-image-section/top-image-section.component";

const ItemSpecifications = ({ item }) => {
  const { title } = item[0];
  return (
    <div>
      <TopImageSection>{title}</TopImageSection>

      <ItemSpecificationTopContainer>
        <ItemContentContainer>
          <ItemImagesContainer>
            
          </ItemImagesContainer>
          <ItemDescriptionContainer></ItemDescriptionContainer>
        </ItemContentContainer>
      </ItemSpecificationTopContainer>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(ownProps.match.params)(state),
});

export default withRouter(connect(mapStateToProps)(ItemSpecifications));

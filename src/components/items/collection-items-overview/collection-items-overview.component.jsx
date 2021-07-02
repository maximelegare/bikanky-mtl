/* eslint-disable react/prop-types */
import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { selectCategory } from "../../../redux/products/products.selectors";
import  Item  from '../item/item.component'
import TopImageSection from "../../top-image-section/top-image-section.component";

// import Item from '../item/item.component';

// The styling of the items-overview is the same as items-preview. Barrowed it.
import {
  ItemsPreviewContainer,
  
  ItemsListContainer,
} from "../items-preview/items-preview.styles";

const CollectionItemsOverview = ({ collection: { title, items } }) => {
  return (
    <div>
      <TopImageSection>{title.toUpperCase()}</TopImageSection>
      {/* select all categories and map */}

      <ItemsPreviewContainer style={{marginTop: '75px'}}>
        
        <ItemsListContainer>
          {/* select items, filter only four items, then map */}

          {items.map((item) => (
            <Item key={item.id} item={item}></Item>
          ))}
        </ItemsListContainer>
      </ItemsPreviewContainer>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCategory(ownProps.match.params.category)(state),
});

export default withRouter(connect(mapStateToProps)(CollectionItemsOverview));

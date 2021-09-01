/* eslint-disable react/prop-types */
import React from "react";
import { useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import { selectCategory } from "../../../redux/items/items.selectors";

import Item from "../item-card/item-card.component";
import TopImageSection from "../../top-image-section/top-image-section.component";

// import {Route} from 'react-router-dom'

// import Item from '../item/item.component';

// The styling of the items-overview is the same as items-preview. Barrowed it.
import { ItemsListContainer } from "../../_styling-containers/pages-styling-containers/pages-styling-containers.styles";
import { PageMediumMarginsContainer } from "../../_styling-containers/pages-styling-containers/pages-styling-containers.styles";

const ItemsOverview = ({ collection: { title, items } }) => {
  useEffect(() => {
    return window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <TopImageSection type="with-title">{title}</TopImageSection>
      
      <PageMediumMarginsContainer>
        <ItemsListContainer>
          {Object.values(items).map((item) => (
            <Item key={item.id} item={item}></Item>
          ))}
        </ItemsListContainer>
      </PageMediumMarginsContainer>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCategory(ownProps.match.params.category)(state),
});

export default withRouter(connect(mapStateToProps)(ItemsOverview));

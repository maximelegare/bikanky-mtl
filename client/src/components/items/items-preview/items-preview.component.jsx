// The Items-preview is a grid in creationPage to show multiple categories (contain only some products)

/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";

import { PageMediumMarginsContainer } from "../../_styling-containers/pages-styling-containers/pages-styling-containers.styles";
import { TitleContainer, TitleWrapperContainer } from "./items-preview.styles";

import { ItemsListContainer } from "../../_styling-containers/pages-styling-containers/pages-styling-containers.styles";

import Item from "../item-card/item-card.component";
import { createStructuredSelector } from "reselect";
import { selectItemsCategories } from "../../../redux/items/items.selectors";
import TopImageSection from "../../top-image-section/top-image-section.component";
import { withRouter } from "react-router-dom";

const ItemsPreview = ({ itemsCategories, history }) => {
  // gets the width of the page
  const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  return (
    <div>
      <TopImageSection type="with-title">Créations</TopImageSection>

      {/* select all categories and map */}
      {Object.values(itemsCategories).map(({ id, title, items, routeName }) => (
        <PageMediumMarginsContainer key={id}>
          <TitleWrapperContainer>
            <TitleContainer
              onClick={() => history.push(`creations/${routeName}`)}
            >
              {title.toUpperCase()}
              <sup>voir&nbsp;plus</sup>
            </TitleContainer>
            <hr />
          </TitleWrapperContainer>
          <ItemsListContainer>
            {/* select items, filter only four items, then map */}
            {Object.values(items)
              // checks if the window width is between 700px and 900px and renders the number of items depending of the width
              .filter((item, idx) => windowWidth < 700 || windowWidth > 900 ? idx < 4 : idx < 3)
              .map((item) => (
                <Item key={item.id} item={item}></Item>
              ))}
          </ItemsListContainer>
        </PageMediumMarginsContainer>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  itemsCategories: selectItemsCategories,
});
export default withRouter(connect(mapStateToProps)(ItemsPreview));

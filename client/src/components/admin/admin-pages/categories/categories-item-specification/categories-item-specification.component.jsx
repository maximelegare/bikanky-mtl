// item specification component rendered inside categories-page.
// it shows all the item spec when the item is selected (including images, title, price, stock, descriptions, etc.)

import React from "react";
import { PropTypes } from "prop-types";


import {
  CategoriesItemSpecficationWrapperContainer,
  ItemBasicInfos,
} from "./categories-item-specification.styles";

import AdminItemSpecificationDetails from "./admin-item-details/admin-item-specification-details.component";
import AdminItemImages from "./admin-images/admin-images.component";

const CategoriesItemSpecification = ({ item, selectInputMenuValues }) => {

  return (
    <>
      {item ? (
        <CategoriesItemSpecficationWrapperContainer>
          <ItemBasicInfos>
            <AdminItemSpecificationDetails item={item} selectInputMenuValues={selectInputMenuValues}/>
            <AdminItemImages item={item} />
          </ItemBasicInfos>
        </CategoriesItemSpecficationWrapperContainer>
      ) : null}
    </>
  );
};

CategoriesItemSpecification.propTypes = {
  item: PropTypes.shape({
    carouselImages: PropTypes.array,
  }),
  selectInputMenuValues:PropTypes.array
};

export default CategoriesItemSpecification;

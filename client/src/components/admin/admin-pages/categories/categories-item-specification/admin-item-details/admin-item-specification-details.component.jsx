// left section of the item specification section in admin page.
// it shows the name, description, price, details

import React from "react";
import { PropTypes } from "prop-types";
import CustomButtonMUI from "../../../../../buttons/material-ui/custom-button-mui.component";
import {
  AdminItemSpecificationDetailsContainerWrapper,
  TitleContainer,
  ShortDescriptionContainer,
  LabelContainer,
  PriceContainer,
  SectionFlexContainer,
} from "./admin-item-specification-details.styles";

import { SectionContainer } from "../categories-item-specification.styles";

const AdminItemSpecificationDetails = ({ item }) => {
const { title, shortDescription, bulletPoints, price, stock } = item;




  return (
    <AdminItemSpecificationDetailsContainerWrapper>
      <SectionContainer>
        <TitleContainer>{title}</TitleContainer>
      </SectionContainer>
      <SectionContainer>
        <LabelContainer>Price:</LabelContainer>
        <PriceContainer>{price.toFixed(2)}$</PriceContainer>
      </SectionContainer>
      <SectionFlexContainer>
        <SectionContainer>
          <LabelContainer>Stock: </LabelContainer>
          <PriceContainer>{stock}</PriceContainer>
        </SectionContainer>
        <SectionContainer style={{alignSelf:'center', marginLeft:'10px'}}>
          <CustomButtonMUI kind="icon-color">add</CustomButtonMUI>
        </SectionContainer>
      </SectionFlexContainer>
      <SectionContainer>
        <LabelContainer>Short Description:</LabelContainer>
        <ShortDescriptionContainer>
          {shortDescription}
        </ShortDescriptionContainer>
      </SectionContainer>
      <SectionContainer>
        <LabelContainer>Details:</LabelContainer>
        <ul>
          {bulletPoints?.map((bullet, index) => (
            <li key={index}>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </SectionContainer>
    </AdminItemSpecificationDetailsContainerWrapper>
  );
};

AdminItemSpecificationDetails.propTypes = {
  item: PropTypes.object,
};

export default AdminItemSpecificationDetails;

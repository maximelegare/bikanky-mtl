// left section of the item specification section in admin page.
// it shows the name, description, price, details

// it's the component where the modal for editing an item is rendered is redered and manage the visibility (categories pages)

import React, { useState } from "react";
import { PropTypes } from "prop-types";
import AdminItemsModal from "../../../../../modal/admin-items-modal/admin-items-modal.component";
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
  const { title, shortDescription, bulletPoints, stock, price } = item;

  const [modalVisibility, setModalVisibility] = useState(false);

  return (
    <>
      <AdminItemsModal
        isVisible={modalVisibility}
        item={item}
        setVisibility={setModalVisibility}
      />

      <AdminItemSpecificationDetailsContainerWrapper>
        <SectionFlexContainer style={{ justifyContent: "space-between" }}>
          <SectionContainer>
            <TitleContainer>{title}</TitleContainer>
          </SectionContainer>
          <SectionContainer onClick={() => setModalVisibility(true)}>
            <CustomButtonMUI kind="small">Edit</CustomButtonMUI>
          </SectionContainer>
        </SectionFlexContainer>
        <SectionContainer>
          <LabelContainer>Price:</LabelContainer>
          {price && <PriceContainer>{parseInt(price)?.toFixed(2)}$</PriceContainer>}
        </SectionContainer>
        <SectionFlexContainer>
          <SectionContainer>
            <LabelContainer>Stock: </LabelContainer>
            <PriceContainer>{stock}</PriceContainer>
          </SectionContainer>
          <SectionContainer style={{ alignSelf: "center", marginLeft: "10px" }}>
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
    </>
  );
};

AdminItemSpecificationDetails.propTypes = {
  item: PropTypes.object,
};

export default AdminItemSpecificationDetails;

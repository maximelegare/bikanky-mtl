import React from "react";
import { ShopPageContainer } from "./shop-page.styles";
import TopImageSection from "../../components/top-image-section/top-image-section.component";
import ItemsPreview from "../../components/items/items-preview/items-preview.component";
const ShopPage = () => {
  return (
    <ShopPageContainer>
      <TopImageSection>CRÉATIONS</TopImageSection>
      <ItemsPreview></ItemsPreview>
    </ShopPageContainer>
  );
};

export default ShopPage;

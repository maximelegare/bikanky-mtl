import styled from "styled-components";

export const CartDDContainerDimensions = styled.div`
  width: 350px;
`;
export const CartContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10px;
  margin-bottom: 10px;
`;

export const CartItemsSectionContainer = styled.div`
  margin: 10px 0;
  width: 100%;
  min-height: 150px;
  max-height: 300px;
  overflow-y: auto;

  /* hides the scrollbar across browsers */
  /* scrollbar-width: none;
  -ms-overflow-style: none; */
  /* &::-webkit-scrollbar-thumb{
      background-color: red;
      border-radius: 6px;
  }
  &::-webkit-scrollbar {
    width: 12px;
    height: 0; */
  /* } */
`;
export const CartItemsList = styled.div``;

export const BottomSectionContainer = styled.div`
  padding-bottom: 20px;
`;
export const ButtonWrapperContainer = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: center;
`;

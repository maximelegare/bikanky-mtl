import styled, { css } from "styled-components";

export const EmptyCartMessage = styled.h4`
text-align: center;
font-weight: 400;
`
const getCartItemsStyles = props => {
  if(props.sideSlider){
    return sliderStyles
  }
  return cartDropdownStyles
}


export const CartItemsSectionContainer = styled.div`
  margin: 10px 0;
  ${getCartItemsStyles}
  min-height: 150px;
  max-height: 300px;
  overflow-y: auto;
  overscroll-behavior: contain;
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

const sliderStyles = css`
width: 100%;
`
const cartDropdownStyles = css`
width: 100%;
`
import styled, { css } from "styled-components";

export const EmptyCartMessage = styled.h4`
text-align: center;
font-weight: 400;
color: grey;

`
const getCartItemsStyles = props => {
  if(props.sideSlider){
    return sliderStyles
  }if(props.checkout){
    return checkoutStyles
  }
  return cartDropdownStyles
}


export const CartItemsSectionContainer = styled.div`
  margin: 10px 0;
  ${getCartItemsStyles}
  /* height: 300px; */
  overflow-y: auto;
  scroll-behavior: contain;
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
height: 175px;
`
const cartDropdownStyles = css`
height: 250px;
`

const checkoutStyles = css`

`
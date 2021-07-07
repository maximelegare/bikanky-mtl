import styled from 'styled-components'

export const CartDropdownWrapperContainer = styled.div`
width: 100%;
height: 80px;
margin: 5px 0;
background-color: #eeeeee;
border-radius: 8px;
`
export const CartDropdownContainer = styled.div`
height: 100%;
display: flex;
justify-content: space-evenly;
align-items: center;
margin:0 auto ;
`

export const ImageContainer = styled.div`
background-image: ${props => `url(${props.image})`};
background-position: center;
background-size: cover;
width: 70px;
height: 70px;
border-radius: 4px;
`

export const DescriptionContainer = styled.div`

`

export const ItemTitleContainer = styled.h5`
width: 180px;
text-decoration: underline;
margin-bottom: 8px;

`
export const ItemQuantityAndPriceContainer = styled.h5`
font-weight: 400;

`


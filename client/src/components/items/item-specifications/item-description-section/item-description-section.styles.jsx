import styled from "styled-components";


export const ItemWrapperContentContainer = styled.div`
width: 90%;
margin: 0 auto;

.hide-on-mobile{
    @media screen and (max-width:900px){
        display: none;
    }
}
`


export const TilteContainer = styled.h2`
line-height: 1.2;
font-family: 'Open Sans', sans-serif;
margin-bottom: 10px;
`
export const TopDescriptionContainer = styled.p`
margin-bottom: 15px;
font-weight: 400;
color:#5e5e5e;
`
export const PriceAndAvailabilityContainer = styled.div`
margin-bottom: 15px;
display: flex;
justify-content: space-between;
align-items: center;
`
export const PriceContainer = styled.h3`

`

export const BulletPointsSectionContainer = styled.div`
margin-bottom: 20px;
`
export const CustomButtonContainer = styled.div`
display: flex;
justify-content: center;
`

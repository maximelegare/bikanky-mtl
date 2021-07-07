import styled from "styled-components";

export const DropDownWrapperContainer =  styled.div`
position: relative;
`
export const DropDownContainer = styled.div`
position: absolute;
z-index: 100;
right: 0;
top:80px;
margin-right: 5%;

`
export const TriangleContainer = styled.div`
width: 0px;
height: 0px;
border-left: 8px solid transparent;
border-right: 8px solid transparent;
border-bottom: 10px solid white;
position:absolute;
margin-top: -9px;
margin-right:  6px;
right: 0;
`

export const DropdownStylesContainer = styled.div`
background-color: #ffffff;
border-radius:8px;
box-shadow: 0 3px 8px #444444;
`


export const BackgroundContainer = styled.div`
background-color: #1f1f1f67;
top: 0;
left:0;
bottom:0;
right: 0;
position: fixed;
z-index:1;
`


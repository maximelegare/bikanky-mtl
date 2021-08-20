import styled from "styled-components";

export const CartIconContainer = styled.div`
position: fixed;
z-index: 100;
bottom: 0;
right: 0;
margin-right: 5%;
margin-bottom: 40px;
padding: 5px 11px;
border-radius: 50%;
background-color: black;
cursor: pointer;
box-shadow: 0 3px 5px #36363696;
@media screen and (min-width:900px){
    display: none;
}
/* box-shadow:var(--light-box-shadow); */
/* border: 4px solid black; */

`
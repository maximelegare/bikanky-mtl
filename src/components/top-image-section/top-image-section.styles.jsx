import styled from "styled-components";


export const ImageContainer = styled.div`
background-image: url(/assets/top.jpg);
background-position-y:100%;
background-position-x:50%;
width: 100%;
height: 35vh;
background-repeat: no-repeat;
background-size: cover;
position: relative;

img{
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 58%;
    height: 180px;
}


@media only screen and (max-width: 860px){
    height:25vh;
}

`;

import styled, {css} from "styled-components";


const selectHeight = ({homePage}) => {
   if(homePage){
       return homePageHeight
   } else{
       return otherHeight
   }
}

const homePageHeight = css`
height: 35vh;
`

const otherHeight = css`
height: 20vh;
`

export const ImageContainer = styled.div`
box-shadow: 0 1px 3px #4e4e4e;
background-image: url(/assets/top.jpg);
background-position-y:100%;
background-position-x:50%;
width: 100%;
background-repeat: no-repeat;
background-size: cover;
position: relative;
${selectHeight};

@media only screen and (max-width: 860px){
    height:25vh;
}
`;

export const TitleContainer = styled.div`
    color:#efcb1d;
    text-align: center;
    font-size: 4rem;
    padding-top:80px;
`

export const TextLogoContainer = styled.img`
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 58%;
    height: 180px;
`

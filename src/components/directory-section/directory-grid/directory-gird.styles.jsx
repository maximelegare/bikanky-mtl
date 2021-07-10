import styled from "styled-components";



export const DirectoryGridContainer = styled.div`
width:50%;
height: 50vh;
margin: 30px auto 0;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows:  1fr 1fr;
gap: 15px;



grid-template-areas: 
    "products products story story"
    "products products services lookbook"    
;
@media only screen and (max-width: 1400px){
width: 70%;
};



@media only screen and (max-width: 900px){
    /* grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 2fr 2fr; */
    width: 90%;
    height: 40vh;
    /* height: 50rem; */

    /* grid-template-areas: 
    
    "products products"
    "story story"
    "services lookbook"
    ; */
};

@media only screen and (max-width: 700px){
    
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    width: 90%;
    height: 100vh;

    grid-template-areas: 
    
    "products"
    "story"
    "services"
    "lookbook"
    ;
};


`


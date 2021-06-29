import styled from "styled-components";



export const DirectoryGridContainer = styled.div`
width:50%;
height: 50vh;
margin: 30px auto 0;
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows:  1fr 1fr;
gap: 10px;


grid-template-areas: 
    "products products story story"
    "products products services lookbook"    
;
@media only screen and (max-width: 1400px){
width: 70%;
};



@media only screen and (max-width: 860px){
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 0.7fr 1fr;
    width: 80%;
    height: 50rem;

    grid-template-areas: 
    
    "products products"
    "story story"
    "services lookbook"
    ;
};

@media only screen and (max-width: 500px){
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 0.7fr 0.6fr;
    width: 90%;
};


`


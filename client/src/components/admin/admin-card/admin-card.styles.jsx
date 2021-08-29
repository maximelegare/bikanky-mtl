import styled, {css} from "styled-components";


const getStyles = (props) => {
    if(props.small) return smallStyles
}

const smallStyles = css`
/* width: 300px; */
width:30%;
`

export const AdminCardContainer = styled.div`
  flex-grow: 1;
  width: 100%;
  ${getStyles}
  height: 100%;
  background-color: white;
  box-shadow: var(--light-box-shadow);
  border-radius: 8px;
  height: 70vh;
  overflow: auto;
 
`;


export const MarginTopContainer = styled.div`
margin-top: 10px;
`

export const ButtonContainer = styled.div`
margin-top: 10px;
display: flex;
justify-content: center;
`
import styled, {css} from "styled-components";


const getStyles = (props) => {
    if(props.small) return smallStyles
}

const smallStyles = css`
flex-basis: 200px;
flex-grow: unset;
`

export const AdminCardContainer = styled.div`
  flex-grow: 1;
  ${getStyles}
  height: 100%;
  background-color: white;
  box-shadow: var(--light-box-shadow);
  border-radius: 8px;
  height: 70vh;
  
`;

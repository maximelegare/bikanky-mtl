import styled from "styled-components";

export const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  width: 100vw;
`;

export const InputSectionContainer = styled.div`
  padding: 15px 10px 25px 10px;
  background-color: var(--card-background-color);
  border-radius: 8px;
  box-shadow: var(--light-box-shadow);
  width: 400px;

  @media screen and (max-width:500px){
    width: 95vw;
  }
`;

export const ButtonSectionContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const TitleContainer = styled.div`
  margin-bottom: 20px;
`;
export const ChangePageContainter = styled.div`
padding-top: 20px;
  h5 {
    margin-top: 10px;
    span {
      text-decoration: underline;
      font-weight: 600;
      cursor: pointer;
      padding:10px 5px ;
    }
  }
`;



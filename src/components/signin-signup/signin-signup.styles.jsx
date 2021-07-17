import styled from "styled-components";

export const WrapperContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const InputSectionContainer = styled.div`
  padding: 15px 10px 25px 10px;
  background-color: var(--card-background-color);
  border-radius: 8px;
  box-shadow: var(--light-box-shadow);
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
    }
  }
`;

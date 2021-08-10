import styled from "styled-components";

export const ItemSpecificationTopContainer = styled.div`
  width: 70%;
  /* height: 80vh; */
  margin: 0 auto;

  @media screen and (max-width: 1100px) {
    width: 95%;
  }
  @media screen and (max-width: 900px) {
    height: unset;
  }
`;

export const ItemContentContainer = styled.div`
  width: 100%;
  gap: 20px;
  display: flex;

  @media screen and (max-width: 900px) {
    display: block;
  }

  .item-title-mobile {
    display: none;
    @media screen and (max-width: 900px) {
      display: block;
    }
  }
`;
export const ItemWrapperContainer = styled.div`
  padding: 20px 0;
  flex: ${(props) => (props.flex ? props.flex : "unset")};
  width: 50%;
  height: 100%;
  background-color: white;
  border-radius: 8px 8px 8px 8px;
  box-shadow: 0 5px 10px #524e4e54;
  margin: 0 auto;
  margin-top: 20px;

  @media screen and (max-width: 900px) {
    width: 95%;
    /* height: 80vh;  */
  }
`;

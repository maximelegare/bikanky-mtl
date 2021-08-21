import styled from "styled-components";

export const AdminWrapperContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  height: 60vh;
  width: 100%;
  gap: 10px;
`;

export const TabsPositionningContainer = styled.div`
  ${(props) => `flex: 1 1 ${props.basis}%`};
  ${(props) => `min-width :${props.minWidth}ch`};
  height: 100%;
  background-color: white;
  box-shadow: var(--light-box-shadow);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  `;
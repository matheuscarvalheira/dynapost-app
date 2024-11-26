// styles.ts
import styled from 'styled-components/native';

export const MainHeaderContainer = styled.View`
  width: 100%;
  height: 80px;
  background-color: #fff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-bottom-width: 1px;
  border-bottom-color: #E4E4E7;
`;

export const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LogoutContainer = styled.View`
  position: absolute;
  right: 20px;
  align-items: center;
  justify-content: center;
`;
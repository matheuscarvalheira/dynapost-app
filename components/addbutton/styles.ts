import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF; 
  padding: 10px;
  border-radius: 30px;
  border: 2px solid #8257E5; 
  height: 50px;
`;

export const PlusIcon = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const ButtonText = styled.Text`
 color: #8257E5;
 font-size: 16px;
`;
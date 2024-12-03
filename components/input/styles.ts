import styled from 'styled-components/native';

export const ContainerWithIcon = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #F4F4F4;
  padding: 5px;
  border-radius: 25px;
  border: 1px solid #000;
`;

export const IconContainer = styled.View`
  margin: 5px;
  padding: 5px;
`;

export const InputWithIcon = styled.TextInput`
  flex: 1;
  text-align: left;
  text-aling-vertical: top;
`;

export const InputWithoutIcon = styled.TextInput`
  background-color: #F4F4F4;
  padding: 10px 20px;
  border-radius: 25px;
  border: 1px solid #000;
  margin-bottom: 15px;
  textAlign: left;
  textAlignVertical: top;
`;
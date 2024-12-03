import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer, PlusIcon, ButtonText } from './styles';
import { AddButtonProps } from './props';

const AddButton: React.FC<AddButtonProps & TouchableOpacityProps> = ({ onPress, icon, buttonText }) => {
  return (
    <ButtonContainer onPress={onPress}>
      <PlusIcon source={icon} />
      <ButtonText>{buttonText}</ButtonText>
    </ButtonContainer>
  );
};

export default AddButton;
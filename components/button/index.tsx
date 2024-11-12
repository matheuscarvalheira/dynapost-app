import React from 'react';
import * as S from './styles';
import { ButtonProps } from "./props";

export default function Button({ children, onPress, ...props }: ButtonProps) {
  return (
    <S.Button onPress={onPress} activeOpacity={0.8} {...props}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.Button>
  );
}
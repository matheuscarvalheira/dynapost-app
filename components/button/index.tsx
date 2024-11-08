import React from 'react';
import * as S from './styles';
import { ButtonProps } from "./props";

export default function Button({ children, onClick, ...props }: ButtonProps) {
  return (
    <S.Button onPress={onClick} activeOpacity={0.8} {...props}>
      <S.ButtonText>{children}</S.ButtonText>
    </S.Button>
  );
}